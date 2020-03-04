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

All messages must be acknowledged after they are received, as they otherwise will be resent.

## Token/credentials
[Create credentials in Console](https://console.wgtwo.com/api-keys-redirect)

##### Required rights
- `sms.receive.to_subscriber`
- `sms.receive.from_subscriber`

## grpcurl

Listen to SMSes. Note that acknowledgment is not covered by this, so messages will be resent.

This will give you fragmented SMSes, so content is not human readable.

```shell script
git clone --depth 1 https://github.com/working-group-two/wgtwoapis.git
cd wgtwoapis
export OPERATOR_TOKEN=$(echo -n ${CLIENT_ID}:${CLIENT_SECRET} | base64 -w0)

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
