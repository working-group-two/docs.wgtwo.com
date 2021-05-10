grpcurl \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"\
  -import-path . \
  -proto wgtwo/callforward/v0/callforward.proto \
  -d '{
        "subscriber": { "e164": "+4672xxxxxxx"}
      }' \
  api.wgtwo.com:443 \
  wgtwo.callforward.v0.CallForwardingService/Disable
