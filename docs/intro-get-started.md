---
title: Get started
topic: intro
type: tutorial
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
sourceExamples:
  - examples/go/events/main.go
---

# Get started

**This guide will show you how to start using our APIs with a hands on tutorial for listening to events.**

## Download proto descriptions

You can find our `.proto` files at https://github.com/working-group-two/wgtwoapis

Download the FileDescriptorSet for our APIs, which contains all our `.proto` files:
```shell
curl -L 'https://github.com/working-group-two/wgtwoapis/blob/master/image.bin?raw=true' -o wgtwo.bin
```

## Set up gRPCurl

We use [gRPCurl](https://github.com/fullstorydev/grpcurl) to invoke the gRPC APIs in this guide.

If you don't have gRPCurl installed, you may run it through Docker:
```shell
grpcurl() {
  docker run -v $(pwd)/wgtwo.bin:/wgtwo.bin fullstorydev/grpcurl "$@"
}
```

## Sandbox environment
Our sandboxed environment is hosted at `sandbox.api.wgtwo.com`.

This is a mock implementation of our gRPC APIs, and does not require any authentication.

### Setup event streaming
> **Note:** This stream will timeout. If it happens while running these examples, just re-run the command.

This will send you all the available events of type `SMS_EVENT`:
```shell
grpcurl -protoset wgtwo.bin \
  -d '{ "type": ["SMS_EVENT"] }' \
  sandbox.api.wgtwo.com:443 \
  wgtwo.events.v0.EventsService.Subscribe
```

You should be able to see mock events such as:

```json
{
  "event": {
    "smsEvent": {
      "id": "3990fb66-eea0-42ef-9699-1af05516ce00",
      "fromE164": {
        "e164": "+46724450024"
      },
      "toE164": {
        "e164": "+4799977540"
      },
      "direction": "FROM_SUBSCRIBER",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "uuid": "b922f707-f6ce-4369-b816-1051bfa40e0d"
    },
    "owner": {
      "phoneNumber": {
        "e164": "+46724450024"
      }
    }
  }
}
```

Leave the command running for the next step.

### Explore the API

For exploring the API we recommend [gRPC UI](https://github.com/fullstorydev/grpcui).

If you don't have **gRPC UI** installed, you may run it through Docker:
```shell
$ docker run -v $(pwd)/wgtwo.bin:/wgtwo.bin -p 8080:8080 \
  fullstorydev/grpcui -protoset wgtwo.bin sandbox.api.wgtwo.com:443
$ # - or -
$ grpcui -protoset wgtwo.bin sandbox.api.wgtwo.com:443
```

## Production environment

Our production environment is hosted at `api.wgtwo.com`.

This part of the guide will show you how to create a OAuth 2.0 token and use that to connected to our event stream.


### Create OAuth 2.0 client

Before you start, see [Create OAuth 2.0 client](/oauth-2-0/create-o-auth-2-0-client/). You need enable the scope `events.sms.subscribe`.

### Get access token (using the Client Credentials Flow)
```shell
curl -s -u ${CLIENT_ID}:${CLIENT_SECRET} # <- Replace CLIENT_ID & CLIENT_SECRET \
    --request POST \
    --url 'https://id.wgtwo.com/oauth2/token' \
    --header 'content-type: application/x-www-form-urlencoded' \
    --data grant_type="client_credentials" \
    --data scope="events.sms.subscribe" \
  | jq .
```


### Setup stream listening for events
> **Note:** This stream will timeout. We expect you to automatically reconnect when that happens.
>
> For details, see: [Configuration and types 〉 Recommended production configuration](/events/configuration-and-types/#recommended-production-configuration).

This will send you all the available events of type `SMS_EVENT`. As nobody has consented to share their events to you,
the stream will be silent until someone has given consent and sent an SMS.

```shell
grpcurl -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -protoset wgtwo.bin \
  -d '{ "type": ["SMS_EVENT"] }' \
  api.wgtwo.com:443 \
  wgtwo.events.v0.EventsService.Subscribe
```

#### Example code for Go

##### Download and run code example
```shell
curl -sL https://github.com/working-group-two/docs.wgtwo.com/raw/master/examples/go/events/main.go -o main.go
go mod init example
go mod tidy
CLIENT_ID=${CLIENT_ID} CLIENT_SECRET=${CLIENT_SECRET} go run main.go
```

**Example source code: `main.go`**
<source-example
  :src="$sourceExamplesMap['examples/go/events/main.go']"
  />

## What's next?

### I am building a subscriber product

In the near future there will be a products API and consent API, where subscribers can programmatically consent to
products to be enabled for their subscription.

There is a special event named `CONSENT_REVOKE_EVENT` that you must listen for, as this will fire if the
consent is removed by the user through e.g. customer support. See [support revoking consent](/oauth-2-0/support-revoking-consent/). This event does not require a explicit scope.

When you are done testing, you can submit your product so that it can be reviewed and listed in our marketplace.

### I am building an operator product
You can contact us directly at [products@wgtwo.com](mailto:products@wgtwo.com) in order to add test subscription(s) to your product.
Unfortunately, at this time it is not possible to do this yourself.

When you are done with your testing, you may submit your product so that it can be reviewed and listed in our marketplace.

## Summary

In this tutorial we have looked at getting mocked events using gRPC (using **gRPCurl** and **gRPC UI**). We have sent an SMS and seen it appear in the events stream. We've also looked at creating a OAuth 2.0 client and moving to the production environment. We've also briefly mentioned publishing your product to a marketplace.

These steps; integrating, moving to production, publishing to a marketplace; are the fundemental steps needed to launch a product on our platform.
