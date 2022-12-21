---
topic: network information
type: how-to
roles:
- OPERATOR
---

# Locate subscriber

These APIs allow you to get network information regarding a subscription.
In order to access this API your credentials need to have the `subscription.network:read` rights.

## `GetNetworkInfoForSubscriber`

Retrieve the network the subscriber is connected, by providing the subscriber phone number.
A subscription may have multiple SIMs. In that case, the list will include one entry per ICCID.

### `GetNetworkInfoForSubscriber` gRPC sample

```shell
grpcurl \
  --protoset wgtwo.bin \
  -d '{
    "phoneNumber": {
      "e164": "+441632960907"
    }
  }' \
  sandbox.api.wgtwo.com:443 \
  wgtwo.subscription.v0.NetworkInfoService/GetNetworkInfoForSubscriber
```

#### `GetNetworkInfoForSubscriber` result

```json
{
  "network_infos": [
    {
      "iccid": { "value": "89234200562437720523" },
      "imsi": { "value": "082904401144897281" },
      "timestamp": "2022-12-19T13:40:35.605Z",
      "network_identity": { "mcc": "302", "mnc": "490" },
      "network_generation": "NETWORK_GENERATION_4G",
      "tadig": { "value": "CANGW" },
      "msc": { "value": "16135550195" },
      "vlr": { "value": "16135550195" },
      "sgsn": { "value": "16135550111" },
      "mme": { "value": "mmec68.mmegi80e9.mme.epc.mnc490.mcc302.3gppnetwork.org"}
    },
    {
      "iccid": { "value": "89234206445646875854" },
      "imsi": { "value": "082904401144897620" },
      "timestamp": "2022-12-19T13:41:35.614Z",
      "network_identity": { "mcc": "302", "mnc": "490" },
      "network_generation": "NETWORK_GENERATION_4G",
      "tadig": null,
      "msc": { "value": "16135550195" },
      "vlr": { "value": "16135550195" },
      "sgsn": { "value": "16135550111" },
      "mme": { "value": "mmec68.mmegi80e9.mme.epc.mnc490.mcc302.3gppnetwork.org" }
    }
  ]
}

```

## `GetAttachmentAttemptsForSubscriber`

Retrieve network attachment attempts, both successful and failed, by providing the subscriber phone number.
Historical data from up to ten days ago can be included.

### `GetAttachmentAttemptsForSubscriber` gRPC sample

```shell
grpcurl \
  --protoset wgtwo.bin \
  -d '{
    "phoneNumber": {
      "e164": "+441632960907"
    },
    "filterByInterval": {
      "after": "1970-03-05T00:00:00.000Z"
    },
    "maxAttempts": 1000
  }' \
  sandbox.api.wgtwo.com:443 \
  wgtwo.subscription.v0.NetworkInfoService/GetAttachmentAttemptsForSubscriber
```

#### `GetAttachmentAttemptsForSubscriber` gRPC result

```json
{
  "attachment_attempts": [
    {
      "iccid": { "value": "89234200562437720523" },
      "imsi": { "value": "082904401144897281" },
      "timestamp": "2022-12-19T13:48:02.848Z",
      "network_identity": { "mcc": "302", "mnc": "490" },
      "network_generation": "NETWORK_GENERATION_4G",
      "tadig": { "value": "CANGW" },
      "status": {
        "code": "CODE_OK",
        "description": ""
      }
    },
    {
      "iccid": { "value": "89234200562437720523" },
      "imsi": { "value": "082904401144897281" },
      "timestamp": "2022-12-19T13:43:02.851Z",
      "network_identity": { "mcc": "302", "mnc": "490" },
      "network_generation": "NETWORK_GENERATION_3G",
      "tadig": { "value": "CANGW" },
      "status": {
        "code": "CODE_ROAMING_NOT_ALLOWED",
        "description": "roaming blocked, ROAMING service present but roaming on [732/123] (from SGSN_GLOBAL_TITLE/573160023004/) blocked by roaming profile 90"
      }
    },
    {
      "iccid": { "value": "89234200562437720523" },
      "imsi": { "value": "082904401144897281"
      },
      "timestamp": "2022-12-19T13:04:02.851Z",
      "network_identity": { "mcc": "302", "mnc": "490" },
      "network_generation": "NETWORK_GENERATION_4G",
      "tadig": { "value": "CANGW" },
      "status": {
        "code": "CODE_ROAMING_NOT_ALLOWED",
        "description": "roaming blocked, ROAMING service present but roaming on [466/097] (from MME_HOSTNAME/mmec22.mmegi2000.mme.epc.mnc097.mcc466.3gppnetwork.org/) blocked by roaming profile 90"
      }
    },
    {
      "iccid": { "value": "89234200562437720523" },
      "imsi": { "value": "082904401144897281" },
      "timestamp": "2022-12-19T09:58:02.851Z",
      "network_identity": { "mcc": "302", "mnc": "490" },
      "network_generation": "NETWORK_GENERATION_4G",
      "tadig": { "value": "CANGW" },
      "status": {
        "code": "CODE_ROAMING_NOT_ALLOWED",
        "description": "roaming blocked, ROAMING service absent"
      }
    }
  ]
}
```
