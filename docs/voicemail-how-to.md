---
title: List, play, delete and configure voicemails
topic: voicemail
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
sourceExamples:
  - examples/grpcurl/thirdpartydev/voicemail/list-voicemail.sh
  - examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/ListVoicemail.kt
  - examples/grpcurl/thirdpartydev/voicemail/play-voicemail.sh
  - examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/PlayVoicemail.kt
  - examples/grpcurl/thirdpartydev/voicemail/mark-voicemail-as-read.sh
  - examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/MarkVoicemailAsRead.kt
  - examples/grpcurl/thirdpartydev/voicemail/delete-voicemail.sh
  - examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/DeleteVoicemail.kt
  - examples/grpcurl/thirdpartydev/voicemail/reset-voicemail-greeting.sh
  - examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/ResetVoicemailGreeting.kt
---

# List, play, delete and configure voicemails

## Overview
This API allows managing voicemail, including getting the actual content. In order to access this API,
your credentials need to have the `voicemail.get`, `voicemail.update`, and `voicemail.delete` rights.

The Event API will allow you to subscribe on voicemail events, which can be used to notify users about new voicemails.


## List voicemails
<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/voicemail/list-voicemail.sh']"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/ListVoicemail.kt']"
  />

## Play voicemail
<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/voicemail/play-voicemail.sh']"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/PlayVoicemail.kt']"
  />


## Mark voicemail as read
<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/voicemail/mark-voicemail-as-read.sh']"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/MarkVoicemailAsRead.kt']"
  />

## Delete voicemail
<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/voicemail/delete-voicemail.sh']"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/DeleteVoicemail.kt']"
  />

## Reset voicemail greeting
<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/voicemail/reset-voicemail-greeting.sh']"
  :kotlinDeps="['event-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/com/wgtwo/examples/thirdpartydev/voicemail/ResetVoicemailGreeting.kt']"
  />

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
