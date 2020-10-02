---
title: Send SMS
topic: sms
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---

# How to send SMS

## Overview

This example shows how you can send text and binary SMSes. In order to send SMSes your credentials need to have the
`sms.send.to_subscriber` and `sms.send.from_subscriber` rights.

### Limitations on `sms.send.to_subscriber`

| Type                  | Description |
| --------------------- | ----------|
| Operator              | May send SMS to subscriber from any sender ID, limited to 11 alphanumeric characters |
| Third Party Developer | May send SMS to subscriber from configured product name to subscriber, with any non-alphanumeric characters stripped and truncated to max length of 11 |

<DemoConfigurer />

## grpcurl

### Send text SMS

Send SMS from international number to international number.

```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/sms/v0/sms.proto \
  -d '
  {
    "content": "My SMS content",
    "fromTextAddress": {
      "textAddress": "Test"
    },
    "toSubscriber": {
      "e164": "47xxxxxxxx"
    }
  }
  ' \
  api.wgtwo.com:443 \
  wgtwo.sms.v0.SmsService/SendTextToSubscriber
```

### Send binary SMS

Unfortunately, `grpcurl` only allows to send JSON formatted strings, so it can't be used to send binary SMS.
Please have a look at the code example for Java / Kotlin below.

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `sms-grpc` and `utils-grpc`:

<ClientDependencies :clients="['sms-grpc', 'utils-grpc']"/>

### Send text SMS
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendTextSmsToSubscriber.kt" language="kotlin" />

### Send binary SMS
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendBinarySmsToSubscriber.kt" language="kotlin" />

## Resources
* [SMS API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/sms/v0/sms.proto)

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
