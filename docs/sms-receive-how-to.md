---
title: Receive SMS
topic: sms
type: how-to
typeOrder: 2
code: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/sms/src/main/kotlin/ReceiveSms.kt
---

# How to receive SMS

## Overview

The SMS API allows you to listen to all sent and received messages.
In order to access this API, your credentials need to have the `sms.receive.to_subscriber` and `sms.receive.from_subscriber` rights.
You can configure your credentials in [Console](https://console.wgtwo.com/api-keys-redirect).

All messages must be acknowledged after they are received, as they otherwise will be resent.

<DemoConfigurer />

## grpcurl

Listen to SMSes. Note that acknowledgment is not covered by this, so messages will be resent.

This will give you fragmented SMSes, so content is not human readable.

```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/messaging/messagecore.proto \
  api.wgtwo.com:443 \
  messaging.MessageCore.ReceiveMessages
```

## Java / Kotlin

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
