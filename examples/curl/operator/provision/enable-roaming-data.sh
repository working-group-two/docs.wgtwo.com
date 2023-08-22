# Access token must be obtained via the client credentials flow
curl -s \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H 'Content-Type: application/json' \
    -d '
    {
        "bssid": "operator_name",
        "services": {
            "add": [
              { "servicename": "ROAMING_DATA" }
            ]
        },
        "msisdn": "46737678218"
    }
    ' \
    https://api.wgtwo.com/provision/v2/update
