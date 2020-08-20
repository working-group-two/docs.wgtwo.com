grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "voicemail_id": "my-voicemail-id" }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.DeleteVoicemail
