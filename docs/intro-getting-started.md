---
title: Getting started
topic: intro
type: how-to
roles:
- THIRD_PARTY_DEVELOPER
---

# Getting started

**This guide will show you how to start using our APIs with a hands on tutorial for listening to events.**

## Download proto descriptions

You can find our `.proto` files at https://github.com/working-group-two/wgtwoapis

Download the FileDescriptorSet for our APIs, which contains all our `.proto` files:
```shell
curl -L https://github.com/working-group-two/wgtwoapis/blob/master/image.bin?raw=true -o wgtwo.bin 
```

## Setup gRPCurl

We use [gRPCurl](https://github.com/fullstorydev/grpcurl) to invoke the gRPC APIs in this guide.

If you don't have gRPCurl installed, you may run it through Docker:
```shell
grpcurl() {
  docker run -v $(pwd)/wgtwo.bin:/wgtwo.bin fullstorydev/grpcurl "$@"
}
```

## Sandbox environment
We do run a sandbox environment hosted at `apisandbox.dub.prod.wgtwo.com`.

This is a mock implementation of our gRPC APIs, and does not require any authentication.

### Setup event streaming
> **Note:** This stream will timeout. We expect you to automatically reconnect when that happens.

This will send you all the available events of type `SMS_EVENT`:
```shell
grpcurl -protoset wgtwo.bin \
  -d '{ "type": ["SMS_EVENT"] }' \
  apisandbox.dub.prod.wgtwo.com:443 \
  wgtwo.events.v0.EventsService.Subscribe
```

### Send SMS

This will send you events of type `SMS_EVENT`:
```shell
grpcurl -protoset wgtwo.bin \
  -d '{
        "content": "This is a test message",
        "from_subscriber": { "e164": "+4799990000" },
        "to_e164": { "e164": "+46724450000" }
      }' \
  apisandbox.dub.prod.wgtwo.com:443 \
  wgtwo.sms.v0.SmsService/SendTextFromSubscriber
```

### Explore the API

For exploring the API, we do recommend [gRPC UI](https://github.com/fullstorydev/grpcui).

If you don't have [gRPC UI](https://github.com/fullstorydev/grpcui) installed, you may run it through Docker:
```shell
docker run -v $(pwd)/wgtwo.bin:/wgtwo.bin -p 8080:8080 \
  fullstorydev/grpcui -protoset wgtwo.bin apisandbox.dub.prod.wgtwo.com:443
```

## Production environment

Our production environment is hosted at `api.wgtwo.com`.

This part of the guide will show you how to create a OAuth 2.0 token and use that to connected to our event stream.


### Create OAuth 2.0 client

Before you start, head over to [Create OAuth 2.0 client](/oauth-2-0/create-o-auth-2-0-client/).

Create a client in https://developer.wgtwo.com, and enable the scope `events.sms.subscribe`.

<ClientCredentials />

### Get access token (using the Client Credentials Flow)
```shell
curl -s -u ${CLIENT_ID}:${CLIENT_SECRET} \
    --request POST \
    --url 'https://id.wgtwo.com/oauth2/token' \
    --header 'content-type: application/x-www-form-urlencoded' \
    --data grant_type="client_credentials" \
    --data scope="events.sms.subscribe" \
  | jq .
```

<DemoConfigurer />

### Setup stream listening for events
> **Note:** This stream will timeout. We expect you to automatically reconnect when that happens.
>
> For details, see: [Configuration and types 〉 Recommended production configuration](/events/configuration-and-types/#recommended-production-configuration).

This will send you all the available events of type `SMS_EVENT`. As nobody has consented to share their events to you,
the stream may be a bit silent...

```shell
grpcurl -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -protoset wgtwo.bin \
  -d '{ "type": ["SMS_EVENT"], "start_at_oldest_possible": {} }' \
  api.wgtwo.com:443 \
  wgtwo.events.v0.EventsService.Subscribe
```

#### Example code for Go

##### Download and run code sample
```shell
curl -sL https://github.com/working-group-two/docs.wgtwo.com/raw/master/examples/go/events/main.go -o main.go
go mod init example
go mod tidy
CLIENT_ID=${CLIENT_ID} CLIENT_SECRET=${CLIENT_SECRET} go run main.go
```

##### Code
```golang
package main

import (
	"context"
	"fmt"
	"github.com/golang/protobuf/jsonpb"
	"github.com/google/uuid"
	wgtwoEvents "github.com/working-group-two/wgtwoapis/wgtwo/events/v0"
	"golang.org/x/oauth2/clientcredentials"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/credentials/oauth"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/durationpb"
	"io"
	"os"
	"time"
)

var marshaler = jsonpb.Marshaler{}

func main() {
	clientCredentialsConfig := &clientcredentials.Config{
		ClientID:     os.Getenv("CLIENT_ID"),
		ClientSecret: os.Getenv("CLIENT_SECRET"),
		Scopes: []string{
			"events.sms.subscribe",
		},
		TokenURL: "https://id.wgtwo.com/oauth2/token",
	}

	conn, err := grpc.Dial(
		"api.wgtwo.com:443",
		grpc.WithTransportCredentials(credentials.NewClientTLSFromCert(nil, "")),
		grpc.WithPerRPCCredentials(
			oauth.TokenSource{
				TokenSource: clientCredentialsConfig.TokenSource(context.Background()),
			},
		),
	)
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	client := wgtwoEvents.NewEventsServiceClient(conn)
	request := &wgtwoEvents.SubscribeEventsRequest{
		Type:          []wgtwoEvents.EventType{wgtwoEvents.EventType_SMS_EVENT},
		StartPosition: &wgtwoEvents.SubscribeEventsRequest_StartAtOldestPossible{},
		ClientId:      uuid.New().String(),
		QueueName:     "test",
		DurableName:   "test",
		MaxInFlight:   10,
		ManualAck: &wgtwoEvents.ManualAckConfig{
			Enable:  true,
			Timeout: durationpb.New(10 * time.Second),
		},
	}

	stream, err := client.Subscribe(context.TODO(), request)

	if err != nil || stream == nil {
		fmt.Println("Could not create stream. Invalid credentials perhaps?")
		return
	}

	for {
		fmt.Println("Starting stream...")
		response, err := stream.Recv()
		if err == io.EOF {
			break
		} else if err != nil {
			errStatus, _ := status.FromError(err)
			fmt.Printf("Could not get response: %s\n", errStatus.Code())
			break
		}
		displayEvent(response)
		ack(client, response.Event)

	}
}

func displayEvent(response *wgtwoEvents.SubscribeEventsResponse) {
	json, err := marshaler.MarshalToString(response)
	if err != nil {
		fmt.Println("Could not parse response")
	} else {
		fmt.Println(json)
	}
}

func ack(client wgtwoEvents.EventsServiceClient, event *wgtwoEvents.Event) {
	ackCtx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()
	_, err := client.Ack(ackCtx, &wgtwoEvents.AckRequest{Inbox: event.Metadata.AckInbox, Sequence: event.Metadata.Sequence})
	if err != nil {
		fmt.Println("Could not ack message...")
	}
}
```

## What's next?

### I am building a subscriber product
All APIs, except the event API, will require an access token obtained via the Authorization Code Grant.

By implementing this flow, your users will authenticate on our platform and grant the consents your application
requires. Once this flow is up, you can start using the API.

There is a special event named `CONSENT_REVOKE_EVENT` that we do recommend you to listen for, as this will fire if the
consent is removed by the user through e.g. customer support.

When you are done with your testing, you may submit your product so that it can be reviewed and listed in our marketplace.

## I am building an operator product
You can contact us directly at products@wgtwo.com in order to add a test subscription to your product.
Unfortunately, at this time it is not possible to do this yourself.

When you are done with your testing, you may submit your product so that it can be reviewd and listed in our marketplace.
