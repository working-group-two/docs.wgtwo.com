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
