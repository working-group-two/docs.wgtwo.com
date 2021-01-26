grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/events/v0/events.proto \
  -d '
  {
    "type": ["VOICE_EVENT"]
  }
  ' \
  api.wgtwo.com:443 \
  wgtwo.events.v0.EventsService.Subscribe
