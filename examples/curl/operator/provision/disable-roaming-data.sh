curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "service": {
            "action": "REMOVE",
            "name": "ROAMING_DATA"
        },
        "msisdn": "46737678218",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/update
