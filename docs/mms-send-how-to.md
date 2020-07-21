---
title: Send MMS
topic: mms
type: how-to
typeOrder: 1
---

# How to send MMS

## Overview

This example shows how you can send MMS. In order to send MMSes your credentials need to have the
`mms.send.to_subscriber` and `mms.send.from_subscriber` rights. You can configure your credentials in [Console](https://console.wgtwo.com/api-keys-redirect).

<slot name="auth" />

## grpcurl

Unfortunately, `grpcurl` only allows to send JSON formatted strings, so it can't be used to send MMS.
Please have a look at the code example for Java / Kotlin below.

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `mms-grpc` and `utils-grpc`:

<ClientDependencies :clients="['mms-grpc', 'utils-grpc']"/>

### Send Audio MMS
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/mms/src/main/kotlin/SendAudioToSubscriber.kt" language="kotlin" />

## Resources
* [MMS API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/mms/v0/mms.proto)

## Concepts
* [wikipedia.org/wiki/MMS](https://en.wikipedia.org/wiki/Multimedia_Messaging_Service)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
