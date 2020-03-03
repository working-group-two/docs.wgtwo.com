---
title: Introduction
topic: introduction
type: explanation
---

# Working Group Two APIs

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
