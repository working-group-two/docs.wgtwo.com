grpcurl \
  -H "Authorization: Basic ${ACCESS_TOKEN}"\ # use a client credential access token, not user access token
  -import-path . \
  -proto wgtwo/events/v0/events.proto \
  -d '
  {
    "type": ["VOICE_EVENT"]
  }
  ' \
  api.wgtwo.com:443 \
  wgtwo.events.v0.EventsService.Subscribe
