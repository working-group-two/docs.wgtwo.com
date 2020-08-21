---
title: List and play voicemails
topic: voicemail
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---
import ListVoicemails from "@/components/howto/voicemail/ListVoicemails.vue";

# List and play voicemails

## Overview
This API allows managing voicemail, including getting the actual content. In order to access this API,
your credentials need to have the `voicemail.get`, `voicemail.update`, and `voicemail.delete` rights.

The Event API will allow you to subscribe on voicemail events, which can be used to notify users about new voicemails.

<slot name="auth" />

### List voicemails
<ListVoicemails />

### Play voicemail
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/PlayVoicemail.kt" language="kotlin" />

### Mark voicemail as read
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/MarkVoicemailAsRead.kt" language="kotlin" />

### Delete voicemail
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/DeleteVoicemail.kt" language="kotlin" />

## Resources
* [VoicemailDemo.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/voicemail/VoicemailDemo.kt)
* [voicemail.proto API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/voicemail/voicemail.proto)

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
