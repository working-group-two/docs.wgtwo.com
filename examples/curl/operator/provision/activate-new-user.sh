curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "iccid": "2420198416000015720",
        "msisdn": "46737678218",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/activate
