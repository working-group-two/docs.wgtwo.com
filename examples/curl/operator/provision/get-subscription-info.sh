# Access token must be obtained via the client credentials flow
curl -s \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  https://api.wgtwo.com/subscription/v2/msisdn/46737678218
