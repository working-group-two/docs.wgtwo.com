grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/callforward/v0/callforward.proto \
  -d '{
        "subscriber": { "e164": "+4672xxxxxxx"},
        "unconditional": {
          "forward_to_number": { "e164": "+4672xxxxxxx"}
        }
      }' \
  api.wgtwo.com:443 \
  wgtwo.callforward.v0.CallForwardingService/SetToNumber
