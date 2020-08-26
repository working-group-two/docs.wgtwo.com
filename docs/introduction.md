---
title: Introduction
topic: introduction
type: overview
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---

# Working Group Two APIs
Our APIs are hosted at https://api.wgtwo.com

## Resources

|           |                                                                    |
|-----------|--------------------------------------------------------------------|
| protobufs | [github.com/working-group-two/wgtwoapis › wgtwo](https://github.com/working-group-two/wgtwoapis/tree/master/wgtwo) |
| OpenAPI   | [github.com/working-group-two/wgtwoapis › openapi](https://github.com/working-group-two/wgtwoapis/tree/master/openapi) |

Sample CLI  app written in Kotlin: [wgtwo-kotlin-code-snippets](https://github.com/working-group-two/wgtwo-kotlin-code-snippets)

## Credentials
API keys are managed via [https://console.wgtwo.com](https://console.wgtwo.com/api-keys-redirect)

## Dependency
Working Group Two's public API can be found at https://github.com/working-group-two/wgtwoapis

<JitpackDependency />

## gRPC

### Well-Known Types
We do use [Google's Well-Known Types](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) in our gRPC APIs.

They may be managed using the following dependency:
<ClientDependencies :clients="['protobuf-java-util']"/>

#### Examples

##### Create a Duration protobuf message
```kotlin
val timeout: com.google.protobuf.Duration = Durations.fromSeconds(15)
```

##### Extension methods for converting to and from java.time
```kotlin
import com.google.protobuf.Timestamp
import com.google.protobuf.util.Durations
import com.google.protobuf.util.Timestamps
import java.time.Duration
import java.time.Instant

fun com.google.protobuf.Duration.toJavaDuration() = Duration.ofNanos(Durations.toNanos(this))
fun Duration.toProtobufDuration() = Durations.fromNanos(this.toNanos())

fun Instant.toProtoTimeStamp(): Timestamp = Timestamps.fromMillis(this.toEpochMilli())
fun Timestamp.toInstant(): Instant = Instant.ofEpochMilli(Timestamps.toMillis(this))
```

### Phone Numbers
All APIs using `wgtwo.common.v0.PhoneNumber` expects a phone number formatted as E.164 with a leading plus sign.

You may include the following dependency to manage this:
<ClientDependencies :clients="['phonenumber-utils']"/>

#### Example
```kotlin
import com.google.i18n.phonenumbers.Phonenumber.PhoneNumber
import com.wgtwo.api.auth.v0.UserTokensProto
import com.wgtwo.api.util.phonenumber.PhoneNumbers

fun PhoneNumber.toPhoneNumberProto() = PhoneNumbers.toPhoneNumberProto(this)

val phoneNumber: PhoneNumber = PhoneNumbers.of("+47 xxx xx xxx")
val request: UserTokensProto.ListUserTokenRequest = UserTokensProto.ListUserTokenRequest.newBuilder()
    .setPhoneNumber(phoneNumber.toPhoneNumberProto())
    .build()
```
