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

## Send text SMS

<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/sms/send-text-sms.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/sms/send-text-sms.sh"
  :kotlinDeps="['sms-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendTextSmsToSubscriber.kt"
  />

## Send binary SMS

<CodeSnippet
  :kotlinDeps="['sms-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendBinarySmsToSubscriber.kt"
  />

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
