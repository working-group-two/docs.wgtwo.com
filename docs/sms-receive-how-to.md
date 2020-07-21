---
title: Receive text SMS
topic: sms
type: how-to
typeOrder: 2
---

# How to receive text SMS

## Overview

The SMS API allows you to listen to all sent and received text messages.
In order to access this API, your credentials need to have the `sms.receive.to_subscriber` and `sms.receive.from_subscriber` rights.
You can configure your credentials in [Console](https://console.wgtwo.com/api-keys-redirect).

All messages must be acknowledged after they are received, as they otherwise will be resent.

<slot name="auth" />

## grpcurl

## Receive text SMS
Listen to text SMSes.

Note: this command does not acknowledge SMS, so messages will be resent after some time.

```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/sms/v0/sms.proto \
  api.wgtwo.com:443 \
  wgtwo.sms.v0.SmsService/ReceiveText
```

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `sms-grpc` and `utils-grpc`:

<ClientDependencies :clients="['sms-grpc', 'utils-grpc']"/>

## Receive text SMS example
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/sms/src/main/kotlin/ReceiveText.kt" language="kotlin" />

## Resources
* [SMS API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/sms/v0/sms.proto)

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
