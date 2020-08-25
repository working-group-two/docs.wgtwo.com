---
title: Send MMS
topic: mms
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---
import SendAudioMms from "@/components/howto/mms/SendAudioMms.vue";

# How to send MMS

## Overview

This example shows how you can send MMS. In order to send MMSes your credentials need to have the
`mms.send.to_subscriber` and `mms.send.from_subscriber` rights.

<DemoConfigurer />

## Send Audio MMS
<SendAudioMms />

## Resources
* [MMS API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/mms/v0/mms.proto)

## Concepts
* [wikipedia.org/wiki/MMS](https://en.wikipedia.org/wiki/Multimedia_Messaging_Service)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
