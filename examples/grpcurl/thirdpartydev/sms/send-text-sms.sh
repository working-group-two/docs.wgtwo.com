grpcurl \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"\
  -import-path . \
  -proto wgtwo/sms/v0/sms.proto \
  -d '{
        "content": "Some important message",
        "from_subscriber": { "e164": "+47xxxxxxxx" },
        "to_e164": { "e164": "+47xxxxxxxx" }
      }' \
  api.wgtwo.com:443 \
  wgtwo.sms.v0.SmsService/SendTextFromSubscriber
