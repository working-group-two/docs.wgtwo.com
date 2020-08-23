---
title: List and play voicemails
topic: voicemail
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---
import ListVoicemail from "@/components/howto/voicemail/ListVoicemail.vue";
import PlayVoicemail from "@/components/howto/voicemail/PlayVoicemail.vue";
import MarkVoicemailRead from "@/components/howto/voicemail/MarkVoicemailRead.vue";
import DeleteVoicemail from "@/components/howto/voicemail/DeleteVoicemail.vue";

# List and play voicemails

## Overview
This API allows managing voicemail, including getting the actual content. In order to access this API,
your credentials need to have the `voicemail.get`, `voicemail.update`, and `voicemail.delete` rights.

The Event API will allow you to subscribe on voicemail events, which can be used to notify users about new voicemails.

<slot name="auth" />

## List voicemails
<ListVoicemail />

## Play voicemail
<PlayVoicemail />

## Mark voicemail as read
<MarkVoicemailRead />

## Delete voicemail
<DeleteVoicemail />

## Resources
* [VoicemailDemo.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/voicemail/VoicemailDemo.kt)
* [voicemail.proto API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/voicemail/voicemail.proto)

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
