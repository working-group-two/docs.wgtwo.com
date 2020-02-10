---
title: Events
topic: events
type: how-to
---

# How to listen for Events

## Overview

To listen for events, you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write client code that connects to our message broker

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect) for the type of event you're interested in.
  You will only receive an event if your token has the appropriate right.

### Install dependencies

To add the dependencies, first you need to add the [Jitpack](https://jitpack.io) repository:
```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```

Then you can add `event-grpc` and `common`:

```xml
<dependencies>
    <dependency>
        <groupId>com.github.working-group-two.wgtwoapis</groupId>
        <artifactId>event-grpc</artifactId>
        <version>91f3d656e6d890829e28f0ee7788359450325828</version>
    </dependency>
    <dependency>
        <groupId>com.github.working-group-two.wgtwoapis</groupId>
        <artifactId>common</artifactId>
        <version>91f3d656e6d890829e28f0ee7788359450325828</version>
    </dependency>
</dependencies>
```

### Initialize your dependencies
```kotlin
import com.wgtwo.api.events.v0.EventsServiceGrpc
import com.wgtwo.api.events.v0.EventsServiceGrpc.EventsServiceStub
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

val channel = Clients.createChannel(Clients.Environment.PROD)
val credentials = OperatorToken("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")
val eventsClient: EventsServiceGrpc.EventsServiceStub = EventsServiceGrpc
    .newStub(channel)
    .withCallCredentials(credentials)
```

## Listen for events
```kotlin
import com.wgtwo.api.events.v0.EventsProto.*
import com.wgtwo.api.events.v0.EventsProto.Event.EventCase
import com.wgtwo.api.events.v0.EventsServiceGrpc
import com.wgtwo.api.events.v0.EventsServiceGrpc.EventsServiceStub
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import io.grpc.stub.StreamObserver

object EventsService {

    val channel = Clients.createChannel(Clients.Environment.PROD)
    val credentials = OperatorToken("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")
    val eventsClient: EventsServiceStub = EventsServiceGrpc
        .newStub(channel)
        .withCallCredentials(credentials)

    val request = SubscribeEventsRequest.newBuilder()
        .addType(EventType.VOICE_EVENT)
        .addType(EventType.VOICEMAIL_EVENT)
        .setSequenceId(0)
        .build()

    init { // You probably want to put this in a function
        eventsClient.subscribe(request, object : StreamObserver<SubscribeEventsResponse> {

            override fun onNext(subscribeEventsResponse: SubscribeEventsResponse) {
                subscribeEventsResponse.eventList.forEach { event ->
                    when (event.eventCase) {
                        EventCase.VOICE_EVENT -> { }
                        EventCase.VOICEMAIL_EVENT -> { }
                        else -> { }
                    }
                }
            }

            override fun onError(throwable: Throwable) {
                // You probably want to reconnect here
            }

            override fun onCompleted() {
                // You probably want to reconnect here
            }

        })
    }

}
```

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
