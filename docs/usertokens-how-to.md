---
title: Manage user tokens
topic: usertokens
type: how-to
---

# Manage user tokens

## Overview

To manage user tokens, you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write client code for creating and managing user tokens

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect).

### Install dependencies
<JitpackDependency />

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

val userTokenStub: UserTokenServiceBlockingStub = UserTokenServiceGrpc
    .newBlockingStub(channel)
    .withCallCredentials(credentials)
```

## Create new user token
A user token may consist of multiple phone numbers, rights and tags.

Rights does accept using `*` as wildcard, which will match any suffix.

For a list of applicable rights, see [List applicable rights](../list-applicable-rights/).

```kotlin
import com.wgtwo.api.auth.v0.UserTokensProto.CreateUserTokenRequest
import com.wgtwo.api.auth.v0.UserTokensProto.CreateUserTokenResponse
import com.wgtwo.api.common.v0.PhoneNumberProto.PhoneNumber

fun create() {
    val phoneNumber = PhoneNumber.newBuilder().apply {
        e164 = "+4799990000"
    }.build()

    val request = CreateUserTokenRequest.newBuilder().apply {
        humanName = "My Raspberry PI project"
        correlationId = "my-unique-id"
        addPhoneNumbers(phoneNumber)
        addRights("voicemail.*")
        putTags("createdBy", "My name")
    }.build()

    val response: CreateUserTokenResponse = userTokenStub.create(request)
    println("The generated token is: ${response.userToken}")
}
```

## List user tokens for phone number
```kotlin
import com.wgtwo.api.auth.v0.UserTokensProto.ListUserTokenRequest
import com.wgtwo.api.auth.v0.UserTokensProto.UserTokenMetadata
import com.wgtwo.api.common.v0.PhoneNumberProto.PhoneNumber

fun list() {
    val phoneNumber = PhoneNumber.newBuilder().apply {
        e164 = "+4799990000"
    }.build()
    val request = ListUserTokenRequest.newBuilder()
        .setPhoneNumber(phoneNumber)
        .build()
    val response = userTokenStub.list(request)
    val userTokens: List<UserTokenMetadata> = response.userTokenMetadataList
}
```

## Get user token
```kotlin
import com.wgtwo.api.auth.v0.UserTokensProto.GetUserTokenRequest
import com.wgtwo.api.auth.v0.UserTokensProto.UserTokenMetadata

fun get() {
    val request = GetUserTokenRequest.newBuilder()
        .setCorrelationId("my-unique-id")
        .build()
    val response = userTokenStub.get(request)
    val userToken: UserTokenMetadata = response.userTokenMetadata
}
```

## Revoke user token
```kotlin
import com.wgtwo.api.auth.v0.UserTokensProto.RevokeUserTokenRequest

fun revoke() {
    val request = RevokeUserTokenRequest.newBuilder()
        .setCorrelationId("my-unique-id")
        .build()
    userTokenStub.revoke(request)
}
```

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
