grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/data/v0/data.proto \
  -d '{
        "subscriber": { "e164": "+4672xxxxxxx"},
        "dnsV4": { 
            "primary": { "ipv4": "1.0.0.2" },
            "secondary": { "ipv4": "1.1.1.1" }
        },
        "dnsV6": { 
            "primary": { "ipv6": "2606:4700:4700::1111" }
        }
      }' \
  api.wgtwo.com:443 \
  wgtwo.data.v0.DataService/SetCustomDns
