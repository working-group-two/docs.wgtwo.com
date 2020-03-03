---
title: Receive SMS
topic: sms
type: how-to
typeOrder: 2
code: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/sms/src/main/kotlin/ReceiveSms.kt
---

# How to receive SMS

## Overview

To receive an SMS you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write code that starts listening for incoming SMS
* Ack each received SMS

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect) to send SMS to/for users on your platform.

### Install dependencies
<JitpackDependency />

Then you can add `messaging-grpc` and `utils-grpc`:

<ClientDependencies :clients="['messaging-grpc', 'utils-grpc']"/>

## Receive SMS
<GithubCode :to="$frontmatter.code" />

## Resources
* [ReceiveSmsServiceExample.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/receivesms/ReceiveSmsServiceExample.kt)
* [Messagecore API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/messaging/messagecore.proto)

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
