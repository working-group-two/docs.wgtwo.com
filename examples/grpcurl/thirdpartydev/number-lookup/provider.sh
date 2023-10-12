#!/usr/bin/env bash

# Download the API definition
curl -sL 'https://github.com/working-group-two/wgtwoapis/blob/master/image.bin?raw=true' -o proto/wgtwo.bin

# Access token must be obtained via the client credentials flow
ACCESS_TOKEN=$(
  curl -s -u $CLIENT_ID:$CLIENT_SECRET \
    --request POST \
    --url 'https://id.wgtwo.com/oauth2/token' \
    --header 'content-type: application/x-www-form-urlencoded' \
    --data grant_type="client_credentials" \
    --data scope="lookup.number:read" \
  | jq -r .access_token
)

# We send data to grpcurl via a PIPE, and receive data via stdout.
PIPE=/tmp/provider-PIPE
mkfifo $PIPE
exec 3<> $PIPE

cleanup() {
    echo "Cleaning up..."
    rm -f $PIPE
    exec 3>&-
    exit
}
trap cleanup INT TERM EXIT

grpcurl \
   -H "Authorization: Bearer $ACCESS_TOKEN" \
   -protoset wgtwo.bin \
   -d @ \
   api.wgtwo.com:443 \
   wgtwo.lookup.v0.NumberLookupService/NumberLookup <&3 \
| while IFS= read -r LINE; do
    # grpcurl sends output line by line, so we buffer until we have a valid JSON object.
    BUFFER+="$LINE"
    if ! jq . >/dev/null 2>&1 <<<"$BUFFER"; then continue; fi

    # Create a JSON response that includes the request and a dummy result.
    RESPONSE_JSON=$(jq -c -n --argjson incoming_content "$BUFFER" \
      '{
          number_lookup_request: $incoming_content,
          result: {
            name: "John Doe"
          }
      }'
    )

    # Send the response to grpcurl via the PIPE.
    echo "$RESPONSE_JSON" > $PIPE

    echo "Sent response:"
    echo "$RESPONSE_JSON" | jq .
    echo ""

    # Clear the buffer.
    BUFFER=""
done
