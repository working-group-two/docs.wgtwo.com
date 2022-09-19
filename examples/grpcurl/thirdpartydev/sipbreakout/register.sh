# Access token must be obtained via the client credentials flow
grpcurl -protoset wgtwo.bin \
  -d '
  {
      "registration": {
          "mobile_originating_prefix": "11",
          "mobile_terminating_prefix": "22",
          "sip_uri": "sips:example.com:8888",
          "route_type": "ROUTE_TYPE_LOOP"
      }
  }
  ' \
  api.wgtwo.com:443 wgtwo.sipbreakout.v0.SipBreakoutService/UpsertRegistration
