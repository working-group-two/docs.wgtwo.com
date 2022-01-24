# Access token must be obtained via the client credentials flow
grpcurl \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"\
  -import-path . \
  -proto wgtwo/webterminal/v0/webterminal.proto \
  -d '
  {
      call_id = "b5289ac4-d254-4d75-8b45-a8c5f5cf47b0"
      offer = {
          sdp="",
          msisdn = {
              e164 = "+1234567890"
          }
      }
  }
  ' \
  api.wgtwo.com:443 \
  wgtwo.webterminal.v0.WebTerminalService/Pipe
