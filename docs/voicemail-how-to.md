---
title: List and play voicemails
topic: voicemail
type: how-to
---

# List and play voicemails

## Overview
This API allows managing voicemail, including getting the actual content. In order to access this API,
your credentials need to have the `voicemail.get`, `voicemail.update`, and `voicemail.delete` rights.
You can configure your credentials in [Console](https://console.wgtwo.com/api-keys-redirect).

The Event API will allow you to subscribe on voicemail events, which can be used to notify users about new voicemails.

<DemoConfigurer />

In the code below, replace "+47xxxxxxxx" with the phone number (e164) you wish to get voicemails from.

## grpcurl

### List voicemails
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "to": { "e164": "+47xxxxxxxx" } }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.GetAllVoicemailMetadata
```

### Play voicemail
This will download and play a voicemail. If using MacOS, you should be able to use `afplay` or equivalent.

```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "voicemail_id": "my-voicemail-id" }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.GetVoicemail \
  | jq -r .wav \
  | base64 -d \
  | tee voicemail.wav \
  | aplay # Linux
```

### Mark voicemail as read
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "voicemail_id": "my-voicemail-id" }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.MarkVoicemailAsRead
```

### Delete voicemail
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "voicemail_id": "my-voicemail-id" }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.DeleteVoicemail
```

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `voicemail-grpc`, `utils-grpc`:

<ClientDependencies :clients="['voicemail-grpc', 'utils-grpc']"/>

### List voicemails
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/ListVoicemail.kt" />

### Play voicemail
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/PlayVoicemail.kt" />

### Mark voicemail as read
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/MarkVoicemailAsRead.kt" />

### Delete voicemail
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/DeleteVoicemail.kt" />

## Resources
* [VoicemailDemo.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/voicemail/VoicemailDemo.kt)
* [voicemail.proto API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/voicemail/voicemail.proto)

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
