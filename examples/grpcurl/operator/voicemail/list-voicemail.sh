grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/voicemail/v0/voicemail.proto \
  -d '{ "to": { "e164": "+47xxxxxxxx" } }' \
  api.wgtwo.com:443 \
  wgtwo.voicemail.v0.VoicemailMediaService.GetAllVoicemailMetadata
