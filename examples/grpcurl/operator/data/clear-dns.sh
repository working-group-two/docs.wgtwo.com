grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/data/v0/data.proto \
  -d '{
        "subscriber": { "e164": "+4672xxxxxxx"}
      }' \
  api.wgtwo.com:443 \
  wgtwo.data.v0.DataService/ClearCustomDns
