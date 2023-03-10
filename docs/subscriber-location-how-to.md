---
topic: network information
type: how-to
roles:
- OPERATOR
---

# Get subscriber network information

These APIs allow you to get network information regarding a subscription.
In order to access this API your credentials need to have the `subscription.network:read` rights.

## `GetNetworkInfoForSubscriber`

Retrieve information about the network the subscriber is connected to, by providing the subscriber
phone number.
A subscription may have multiple SIMs. In that case, the list will include one entry per ICCID.

## Messages

`GetNetworkInfoForSubscriber` method receives `GetNetworkInfoForSubscriberRequest` and
returns `GetNetworkInfoForSubscriberResponse` messages.
`GetAttachmentAttemptsForSubscriberResponse` contains a list of `AttachmentAttempt` messages, and
has a `status` field that indicates the status of the attachment attempts.

The following `status` codes are defined:

| Status                     | Code | Description                                                                                                                                                                                                |
|----------------------------|------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `CODE_UNSPECIFIED`         | 0    | Is the default value and will not be used.                                                                                                                                                                 |
| `CODE_OK`                  | 1    | Indicates that the attachment was successful.                                                                                                                                                              |
| `CODE_ABSENT_PROFILE`      | 2    | Currently not used                                                                                                                                                                                         |
| `CODE_ABSENT_SUBSCRIBER`   | 3    | Currently not used                                                                                                                                                                                         |
| `CODE_UNKNOWN_PROFILE`     | 4    | Indicates that the subscriber was not allowed to attach because it is not provisioned on the WGTWO platform.                                                                                               |
| `CODE_BLOCKED_PROFILE`     | 5    | Indicates that the subscriber was not allowed to attach because it is inactive/blocked                                                                                                                     |
| `CODE_ROAMING_NOT_ALLOWED` | 6    | Indicates that the subscriber was not allowed to attach because it either was missing the roaming services or because the roaming profile of the subscriber did not allow the it to roam at that location. |

## `GetNetworkInfoForSubscriber`

Retrieve information about the network the subscriber is connected to, by providing the subscriber
phone number.
A subscription may have multiple SIMs. In that case, the list will include one entry per ICCID.

## gRPC errors

The following gRPC errors are used for this API:

| Status               | Code | Notes                                                                       |
|----------------------|-----|-----------------------------------------------------------------------------|
| `OK`                 | 0   | Return on Success.                                                          |
| `UNKNOWN`            | 2   |                                                                             |
| `INVALID_ARGUMENT`   | 3   | The client specified an invalid argument.                                   |
| `PERMISSION_DENIED`  | 7   | The client dosen't have the correct permissions                             |
| `UNAUTHENTICATED`    | 16  | The client doesn't have valid authentication credentials for the operation. |

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
      "network_identity": { "mcc": "732", "mnc": "123" },
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
      "network_identity": { "mcc": "466", "mnc": "097" },
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
