---
title: Send SMS
topic: sms
type: how-to
typeOrder: 1
code: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/sms/src/main/kotlin/SendSms.kt
---

# How to send SMS

## Overview

This API allows you to send SMSes. 

## Token/credentials
[Create credentials in Console](https://console.wgtwo.com/api-keys-redirect)

##### Required rights
- `sms.send.to_subscriber`
- `sms.send.from_subscriber`

## grpcurl

Send SMS from international number to international number.

```shell script
git clone --depth 1 https://github.com/working-group-two/wgtwoapis.git
cd wgtwoapis
export OPERATOR_TOKEN=$(echo -n ${CLIENT_ID}:${CLIENT_SECRET} | base64 -w0)

grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/messaging/messagecore.proto \
  -d '
  {
    "body": "My SMS content",
    "fromAddress": {
      "type": "INTERNATIONAL_NUMBER",
      "number": "47xxxxxxxx"
    },
    "toAddress": {
      "type": "INTERNATIONAL_NUMBER",
      "number": "47xxxxxxxx"
    },
    "direction": "OUTGOING"
  }
  ' \
  api.wgtwo.com:443 \
  messaging.MessageCore.SendTextMessage
```

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `messaging-grpc` and `utils-grpc`:

<ClientDependencies :clients="['messaging-grpc', 'utils-grpc']"/>

## Send SMS
<GithubCode :to="$frontmatter.code" />

## Resources
* [SendSmsDemo.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/sendsms/SendSmsDemo.kt)
* [Messagecore API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/messaging/messagecore.proto)

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
