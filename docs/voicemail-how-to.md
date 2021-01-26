---
title: List and play voicemails
topic: voicemail
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---
import CodeSnippet from "@/components/howto/CodeSnippet.vue";

# List and play voicemails

## Overview
This API allows managing voicemail, including getting the actual content. In order to access this API,
your credentials need to have the `voicemail.get`, `voicemail.update`, and `voicemail.delete` rights.

The Event API will allow you to subscribe on voicemail events, which can be used to notify users about new voicemails.

<DemoConfigurer />

## List voicemails
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/list-voicemail.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/list-voicemail.sh"
  :kotlinDeps="['events-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/ListVoicemail.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/ListVoicemail.kt"
  />

## Play voicemail
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/play-voicemail.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/play-voicemail.sh"
  :kotlinDeps="['events-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/PlayVoicemail.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/PlayVoicemail.kt"
  />


## Mark voicemail as read
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/mark-voicemail-as-read.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/mark-voicemail-as-read.sh"
  :kotlinDeps="['events-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/MarkVoicemailAsRead.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/MarkVoicemailAsRead.kt"
  />

## Delete voicemail
<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/delete-voicemail.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/delete-voicemail.sh"
  :kotlinDeps="['events-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/DeleteVoicemail.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/DeleteVoicemail.kt"
  />

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
