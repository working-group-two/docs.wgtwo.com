---
title: List and play voicemails
topic: voicemail
type: how-to
codeList: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/ListVoicemail.kt
codeDelete: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/DeleteVoicemail.kt
codeMarkAsRead: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/MarkVoicemailAsRead.kt
codePlay: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/voicemail/src/main/kotlin/PlayVoicemail.kt
---

# List and play voicemails

## Overview
This API allows managing voicemail, including getting the actual content.

The Event API will allow you to subscribe on voicemail events, which can be used to notify users about new voicemails.

## Token/credentials
[Create credentials in Console](https://console.wgtwo.com/api-keys-redirect)

##### Required rights
- `voicemail.get`
- `voicemail.update`
- `voicemail.delete`

##### Environment variables expected in example code:

| Environment variable | Value                      |
|----------------------|----------------------------|
| CLIENT_ID            | Client ID from Console     |
| CLIENT_SECRET        | Client secret from Console |

### Phone number on platform to target
* The code assumes you know which phone number (e164) you wish to get voicemails from.

## grpcurl
### Initial setup

```shell script
git clone --depth 1 https://github.com/working-group-two/wgtwoapis.git
cd wgtwoapis
export OPERATOR_TOKEN=$(echo -n ${CLIENT_ID}:${CLIENT_SECRET} | base64 -w0)
```

### List voicemails
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "to": { "e164": "+47xxxxxxxx" } }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.getAllVoicemailMetadata
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
  wgtwo.voicemail.v0.VoicemailMediaService.getVoicemail \
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
  wgtwo.voicemail.v0.VoicemailMediaService.markVoicemailAsRead
```

### Delete voicemail
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "voicemail_id": "my-voicemail-id" }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.deleteVoicemail
```

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `voicemail-grpc`, `utils-grpc`:

<ClientDependencies :clients="['voicemail-grpc', 'utils-grpc']"/>

### List voicemails
<GithubCode :to="$frontmatter.codeList" />

### Play voicemail
<GithubCode :to="$frontmatter.codePlay" />

### Mark voicemail as read
<GithubCode :to="$frontmatter.codeMarkAsRead" />

### Delete voicemail
<GithubCode :to="$frontmatter.codeDelete" />

## Resources
* [VoicemailDemo.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/voicemail/VoicemailDemo.kt)
* [voicemail.proto API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/voicemail/voicemail.proto)

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
