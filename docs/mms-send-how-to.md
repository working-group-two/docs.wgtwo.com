---
title: Send MMS
topic: mms
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
sourceExamples:
  - examples/kotlin/thirdpartydev/mms/src/main/kotlin/com/wgtwo/examples/thirdpartydev/mms/SendAudioToSubscriber.kt
---

# How to send MMS

## Overview

This example shows how you can send MMS. In order to send MMSes your credentials need to have the
`mms.send.to_subscriber` and `mms.send.from_subscriber` rights.

### Limitations on `mms.send.to_subscriber`

| Type                  | Description |
| --------------------- | ----------|
| Operator              | May send MMS to subscriber from any sender ID, limited to 11 alphanumeric characters |
| Third Party Developer | May send MMS to subscriber from configured product name to subscriber, with any non-alphanumeric characters stripped and truncated to max length of 11 |

## Send audio MMS
<CodeSnippet
  :kotlinDeps="['mms-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/mms/src/main/kotlin/com/wgtwo/examples/thirdpartydev/mms/SendAudioToSubscriber.kt']"
  />

## Concepts
* [wikipedia.org/wiki/MMS](https://en.wikipedia.org/wiki/Multimedia_Messaging_Service)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
