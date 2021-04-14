grpcurl \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "subscriber": { "e164": "+47xxxxxxxx" } }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.ResetVoicemailGreeting
