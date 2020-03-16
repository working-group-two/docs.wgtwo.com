---
title: Send SMS
topic: sms
type: how-to
typeOrder: 1
code: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/sms/src/main/kotlin/SendTextSms.kt
---

# How to send SMS

## Overview

This example shows how you can send text SMSes. In order to send SMSes your credentials need to have the
`sms.send.to_subscriber` and `sms.send.from_subscriber` rights. You can configure your credentials in [Console](https://console.wgtwo.com/api-keys-redirect).

<DemoConfigurer />

## grpcurl

### Send text SMS

Send SMS from international number to international number.

```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/messaging/messagecore.proto \
  -d '
  {
    "body": "My SMS content",
    "fromAddress": {
      "type": "INTERNATIONAL_NUMBER",
      "number": "47xxxxxxxx"
    },
    "toAddress": {
      "type": "INTERNATIONAL_NUMBER",
      "number": "47xxxxxxxx"
    },
    "direction": "OUTGOING"
  }
  ' \
  api.wgtwo.com:443 \
  messaging.MessageCore.SendTextMessage
```

### Send binary messages

Unfortunately, `grpcurl` only allows to send JSON formatted strings, so it can't be used to send binary SMS.

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `messaging-grpc` and `utils-grpc`:

<ClientDependencies :clients="['messaging-grpc', 'utils-grpc']"/>

### Send text SMS
<GithubCode :to="$frontmatter.code" />

### Send binary SMS
<GithubCode :to="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/sms/src/main/kotlin/SendBinarySms.kt" />

## Resources
* [SendSmsDemo.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/sendsms/SendSmsDemo.kt)
* [Messagecore API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/messaging/messagecore.proto)

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
