# Access token must be obtained via the client credentials flow
grpcurl -protoset wgtwo.bin \
  -d '
  {
      mo_prefix = "11",
      mt_prefix = "22",
      suri="sips:example.com:8888",
      route_type="LOOP"
  }
  ' \
  api.wgtwo.com:443 wgtwo.sipbreakout.v0.SipBreakoutService/UpsertRegistration
