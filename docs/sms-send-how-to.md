---
title: Send SMS
topic: sms
type: how-to
typeOrder: 1
---

# How to send SMS

## Overview

To send an SMS you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write code that targets a sender, receiver, and with some content

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect) to send SMS to/for users on your platform.

### Install dependencies
<JitpackDependency />

Then you can add `messaging-grpc` and `common`:

```xml
<dependencies>
    <dependency>
        <groupId>com.github.working-group-two.wgtwoapis</groupId>
        <artifactId>messaging-grpc</artifactId>
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
import com.wgtwo.api.auth.Clients
import com.wgtwo.api.common.OperatorToken

val channel = Clients.createChannel(Clients.Environment.PROD)
val credentials = OperatorToken("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")
val blockingStub = MessageCoreGrpc.newBlockingStub(channel).withCallCredentials(credentials)
```

## Send SMS
```kotlin
typealias Msisdn = String

fun sendSms(
    from: Msisdn,
    to: Msisdn,
    content: String,
    direction: Messagecore.Direction = Messagecore.Direction.OUTGOING // `OUTGOING` for sending from a subscriber
                                                                      // `INCOMING` to send directly to a subscriber, without anyone actually sending the SMS
) {
    val message = Messagecore.TextMessage.newBuilder()
        .setFromAddress(from.toAddress())
        .setToAddress(to.toAddress())
        .setBody(content)
        .setDirection(direction)
        .build()

    val sendResult = blockingStub.sendTextMessage(message)
    val status = sendResult.status
    if (status == Messagecore.SendAttemptStatus.SEND_OK) {
        println("Successfully sent message to $to, from $from")
    } else {
        println("Failed to send message to $to, from $from. Got status: $status. Description: ${sendResult.description}")
    }
}

// Helper method to convert a Msisdn to an Address
fun Msisdn.toAddress(): Messagecore.Address = Messagecore.Address.newBuilder()
    .setNumber(this)
    .setType(Messagecore.Address.Type.INTERNATIONAL_NUMBER)
    .build()
```

## Resources
* [SendSmsDemo.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/sendsms/SendSmsDemo.kt)
* [Messagecore API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/messaging/messagecore.proto)

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
