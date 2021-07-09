---
title: Send SMS
topic: sms
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
sourceExamples:
  - examples/grpcurl/thirdpartydev/sms/send-text-sms.sh
  - examples/kotlin/thirdpartydev/sms/src/main/kotlin/com/wgtwo/examples/thirdpartydev/sms/SendTextSmsToSubscriber.kt
  - examples/kotlin/thirdpartydev/sms/src/main/kotlin/com/wgtwo/examples/thirdpartydev/sms/SendBinarySmsToSubscriber.kt
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

## Send text SMS

<CodeSnippet
  :grpcurl="$page.doc.sourceExamples[0]"
  :kotlinDeps="['sms-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/sms/src/main/kotlin/com/wgtwo/examples/thirdpartydev/sms/SendTextSmsToSubscriber.kt']"
  />

## Send binary SMS

<CodeSnippet
  :kotlinDeps="['sms-grpc', 'utils-grpc']"
  :kotlin="$page.doc.sourceExamples[2]"
  />

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
