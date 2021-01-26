---
title: Send MMS
topic: mms
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---
import CodeSnippet from "@/components/CodeSnippet.vue";

# How to send MMS

## Overview

This example shows how you can send MMS. In order to send MMSes your credentials need to have the
`mms.send.to_subscriber` and `mms.send.from_subscriber` rights.

### Limitations on `mms.send.to_subscriber`

| Type                  | Description |
| --------------------- | ----------|
| Operator              | May send MMS to subscriber from any sender ID, limited to 11 alphanumeric characters |
| Third Party Developer | May send MMS to subscriber from configured product name to subscriber, with any non-alphanumeric characters stripped and truncated to max length of 11 |


<DemoConfigurer />

## Send audio MMS
<CodeSnippet
  :kotlinDeps="['mms-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/mms/src/main/kotlin/SendAudioToSubscriber.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/mms/src/main/kotlin/SendAudioToSubscriber.kt"
  />

## Concepts
* [wikipedia.org/wiki/MMS](https://en.wikipedia.org/wiki/Multimedia_Messaging_Service)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
