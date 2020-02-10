---
title: List applicable rights
topic: usertokens
type: how-to
---

# List applicable rights

## Overview

To manage user tokens, you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write client code for creating and managing user tokens

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect).

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
        <artifactId>auth-grpc</artifactId>
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
import com.wgtwo.api.auth.v0.RightServiceGrpc
import com.wgtwo.api.auth.v0.RightServiceGrpc.RightServiceBlockingStub
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

val channel = Clients.createChannel(Clients.Environment.PROD)
val credentials = OperatorToken("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")

val rightsStub: RightServiceBlockingStub = RightServiceGrpc
    .newBlockingStub(channel)
    .withCallCredentials(credentials)
```

## List all applicable rights
Returns a list of all applicable rights

```kotlin
import com.wgtwo.api.auth.v0.RightsProto.ListRightsRequest
import com.wgtwo.api.auth.v0.RightsProto.ListRightsResponse

fun listRights() {
    val request = ListRightsRequest.newBuilder().build()
    val response: ListRightsResponse = rightsStub.list(request)
    val rights: List<String> = response.rightsList
}
```

## Check what a right will be expanded to
Returns a list of all the rights the given rights will be expanded to.

```kotlin
import com.wgtwo.api.auth.v0.RightsProto.CheckExpansionRequest
import com.wgtwo.api.auth.v0.RightsProto.CheckExpansionResponse

fun checkRights() {
    val request = CheckExpansionRequest.newBuilder()
        .addRights("voicemail.*")
        .addRights("sms.*")
        .build()
    val response: CheckExpansionResponse = rightsStub.checkExpansion(request)
    val rights: List<String> = response.rightsList
}
```

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
