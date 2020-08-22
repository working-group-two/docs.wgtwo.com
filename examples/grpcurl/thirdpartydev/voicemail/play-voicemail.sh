grpcurl \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "voicemail_id": "my-voicemail-id" }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.GetVoicemail \
  | jq -r .wav \
  | base64 -d \
  | tee voicemail.wav \
  | aplay # Linux
