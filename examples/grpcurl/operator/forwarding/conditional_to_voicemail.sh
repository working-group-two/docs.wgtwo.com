grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/callforward/v0/callforward.proto \
  -d '{
        "subscriber": { "e164": "+4672xxxxxxx"},
        "conditional": {
          "busy": { "e164": "+4672xxxxxxx"},
          "unavailable": { "e164": "+4672xxxxxxx"},
          "no_reply": { "e164": "+4672xxxxxxx"}
        }
      }' \
  api.wgtwo.com:443 \
  wgtwo.callforward.v0.CallForwardingService/SetToVoicemail
