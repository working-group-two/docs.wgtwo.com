---
title: List, play, delete and configure voicemails
topic: voicemail
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---

# List, play, delete and configure voicemails

## Overview
This API allows managing voicemail, including getting the actual content. In order to access this API,
your credentials need to have the `voicemail.get`, `voicemail.update`, and `voicemail.delete` rights.

The Event API will allow you to subscribe on voicemail events, which can be used to notify users about new voicemails.

<DemoConfigurer />

## List voicemails
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/list-voicemail.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/list-voicemail.sh"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/com/wgtwo/examples/operator/voicemail/ListVoicemail.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/ListVoicemail.kt"
  />

## Play voicemail
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/play-voicemail.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/play-voicemail.sh"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/com/wgtwo/examples/operator/voicemail/PlayVoicemail.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/PlayVoicemail.kt"
  />


## Mark voicemail as read
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/mark-voicemail-as-read.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/mark-voicemail-as-read.sh"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/com/wgtwo/examples/operator/voicemail/MarkVoicemailAsRead.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/MarkVoicemailAsRead.kt"
  />

## Delete voicemail
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/delete-voicemail.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/delete-voicemail.sh"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/com/wgtwo/examples/operator/voicemail/DeleteVoicemail.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/DeleteVoicemail.kt"
  />

## Reset voicemail greeting
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/reset-voicemail-greeting.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/reset-voicemail-greeting.sh"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/com/wgtwo/examples/operator/voicemail/ResetVoicemailGreeting.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/ResetVoicemailGreeting.kt"
  />

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
