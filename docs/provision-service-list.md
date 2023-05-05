---
title: Subscription services
topic: subscription profile
type: api-reference
hideWarning: true
---

# Service list

This table shows what services are available through the v1 and v2 provisoning API surfaces.
Some services depend on other services, e.g. to be able to make international calls, you need the `VOICE_OUT_INTER` service but also the general `VOICE_OUT` service, as shown below in the `Requires services` column.
This allows an operator to quickly block access to all voice services by removing only the `VOICE_OUT` service.
Some services are configurable, examples are provided under [Configurable services](#configurable_services). 

| Service name                                       | Description                                                          | Available in APIv1 | Available in APIv2 | Requires services                          |
|----------------------------------------------------|----------------------------------------------------------------------|--------------------|--------------------|--------------------------------------------|
| [DATA][data]                                       | Data allowed                                                         | Y                  | Y                  | -                                          |
| DATA_2G_3G                                         | Data on 2G and 3G networks allowed                                   | No                 | Y                  | DATA                                       |
| DATA_2G_3G_ROAM                                    | Data on 2G and 3G networks allowed while roaming                     | No                 | Y <sup>1</sup>     | DATA, DATA_2G_3G                           |
| DATA_4G                                            | Data on 4G networks allowed                                          | No                 | Y                  | DATA                                       |
| DATA_4G_ROAM                                       | Data on 4G networks allowed while roaming                            | No                 | Y <sup>1</sup>     | DATA, DATA_4G                              |
| DATA_5G                                            | Data on 5G networks allowed (5G NSA also requires DATA_4G)           | No                 | Y                  | DATA                                       |
| DATA_5G_ROAM                                       | Data on 5G networks allowed while roaming                            | No                 | Y <sup>1</sup>     | DATA, DATA_5G                              |
| [DATA_CONTENT_FILTERING][data-cf]                  | Content filtering on mobile data                                     | No                 | Y                  | DATA                                       |
| DATA_HIGHSPEED                                     | Data allowed at high speed                                           | Y                  | No <sup>2</sup>    | -                                          |
| DATA_TETHERING                                     | Share data through tethering                                         | Y                  | Y                  | DATA                                       |
| MMS_IN                                             | Incoming MMS                                                         | Y                  | Y                  |                                            |
| MMS_IN_ROAM                                        | Incoming MMS while roaming                                           | No                 | Y <sup>1</sup>     | MMS_IN                                     |
| MMS_OUT                                            | Outgoing MMS                                                         | Y                  | Y                  | -                                          |
| MMS_OUT_ROAM                                       | Outgoing MMS while roaming                                           | No                 | Y <sup>1</sup>     | MMS_OUT                                    |
| MMS_OUT_INTER                                      | Outgoing international MMS                                           | Y                  | Y                  | MMS_OUT                                    |
| MMS_OUT_INTER_ROAM                                 | Outgoing international MMS while roaming                             | No                 | Y <sup>1</sup>     | MMS_OUT, MMS_OUT_ROAM, MMS_OUT_INTER       |
| [PRODUCT_BUNDLING][product-bundling]               | Include products from ecosystem                                      | Y                  | Y                  |                                            |
| ROAMING                                            | All roaming services, incl. network attachment                       | Y                  | Y                  |                                            |
| ROAMING_DATA                                       | Data access while roaming                                            | Y                  | Y                  |                                            |
| SMS_IN                                             | Incoming SMS                                                         | Y                  | Y                  |                                            |
| SMS_IN_ROAM                                        | Incoming SMS while roaming                                           | No                 | Y <sup>1</sup>     | SMS_IN                                     |
| SMS_OUT                                            | Outgoing domestic SMS                                                | Y                  | Y                  | -                                          |
| SMS_OUT_ROAM                                       | Outgoing domestic SMS while roaming                                  | No                 | Y <sup>1</sup>     | SMS_OUT                                    |
| SMS_OUT_INTER                                      | International SMS                                                    | Y                  | Y                  | SMS_OUT                                    |
| SMS_OUT_INTER_ROAM                                 | International SMS while roaming                                      | No                 | Y <sup>1</sup>     | SMS_OUT, SMS_OUT_ROAM, SMS_OUT_INTER       |
| SMS_PREMIUM                                        | Premium content SMS                                                  | Y                  | Y                  | <sup>3</sup>                               |
| [USER_CS_BLOCK_IN][user-cs-block]                  | User block of incoming calls                                         | No                 | Y <sup>1</sup>     |                                            |
| [USER_CS_BLOCK_OUT][user-cs-block]                 | User block of outgoing calls                                         | No                 | Y <sup>1</sup>     |                                            |
| [USER_CS_BLOCK_OUT_INTER][user-cs-block]           | User block of outgoing international calls                           | No                 | Y <sup>1</sup>     |                                            |
| [USER_CS_BLOCK_OUT_INTER_EXEC_HOME][user-cs-block] | User block of outgoing international calls, except to home country   | No                 | Y <sup>1</sup>     |                                            |
| VOICE_CALLER_ID_PRESENTATION                       | Enables caller ID presentation on voice calls.                       | No                 | Y                  |                                            |
| [VOICE_CALLER_ID_RESTRICTION][clir]                | Enables caller ID restriction on voice calls.                        | No                 | Y                  |                                            |
| [VOICE_CALLFORWARD][voice-cf]                      | Forward calls                                                        | Y                  | Y                  | <sup>3</sup>                               |
| VOICE_CALLWAITING                                  | If busy, let new callers wait instead of dropping with busy tone     | No                 | Y                  | <sup>3</sup>                               |
| VOICE_CONFERENCE                                   | Enables setting up conference calls.                                 | No                 | Y                  | <sup>3</sup>                               |
| VOICE_IN                                           | Incoming calls                                                       | Y                  | Y                  |                                            |
| VOICE_IN_ROAM                                      | Incoming calls while roaming                                         | No                 | Y <sup>1</sup>     | VOICE_IN                                   |
| VOICE_MISSED_CALL_ALERT                            | Send alert when missing a call                                       | Y                  | Y                  | -                                          |
| VOICE_OUT                                          | Outgoing domestic calls                                              | Y                  | Y                  | -                                          |
| VOICE_OUT_ROAM                                     | Outgoing domestic calls while roaming                                | No                 | Y <sup>1</sup>     | VOICE_OUT                                  |
| VOICE_OUT_INTER                                    | International calls                                                  | Y                  | Y                  | VOICE_OUT                                  |
| VOICE_OUT_INTER_ROAM                               | International calls while roaming                                    | No                 | Y <sup>1</sup>     | VOICE_OUT, VOICE_OUT_ROAM, VOICE_OUT_INTER |
| [VOICE_PREMIUM][voice-prem]                                      | Premium content calls (classified by operator)                       | Y                  | Y                  | <sup>3</sup>                               |
| [VOICE_PREMIUM_ENTERTAINMENT][voice-prem-info-ent]                        | Calls towards premium entertainment services (classified by network) | No                 | Y <sup>1</sup>     | <sup>3</sup>                               |
| [VOICE_PREMIUM_INFO][voice-prem-info-ent]                                 | Calls towards premium informational services (classified by network) | No                 | Y <sup>1</sup>     | <sup>3</sup>                               |
| VOICE_VOICEMAIL                                    | Voicemail service                                                    | Y                  | Y                  |                                            |
| VOICE_VOLTE                                        | Voice calls over LTE                                                 | Y                  | Y                  | <sup>3</sup>                               |
| VOICE_VOWIFI                                       | Voice calls over WiFi                                                | Y                  | Y                  | <sup>3</sup>                               |
| VOICEMAIL_DISABLE_NOTIFICATION                     | Disable voicemail notifications                                      | Y                  | Y                  |                                            |

[data]:./#data
[data-cf]:./#data_content_filtering
[product-bundling]:./#product_bundling
[user-cs-block]:./#user_cs_block-services
[clir]:./#voice_caller_id_restriction
[voice-cf]:./#voice_callforward
[voice-prem]:./#voice_premium
[voice-prem-info-ent]:./#voice-premium-network-blocks

<sup>1</sup> When migrating from APIv1 to APIv2, WG2 need to enable this service for your tenant's network core first, so your configuration takes effect.

<sup>2</sup> DATA_HIGHSPEED is being deprecated in favor of setting data speed explicitly through the configuration in the DATA service instead.
The DATA_HIGHSPEED service is still effective during the process of migration.

<sup>3</sup> Services otherwise applicable to user this service applies, i.e. calling a premium number from abroad also requires the services you would need for a general call from abroad.

## Configurable services
Payload examples to the ServiceObject fields described in [the API reference page](../subscription-profile-api-reference/).
All updates to the config object will replace any current config for that subscriber and service.

### DATA
Configuration currently _optional_ for transitional purposes.
```json
{
  "servicename": "DATA",
  "config": {
    "speed_bps": 256000
  }
}
```

### DATA_CONTENT_FILTERING
The full list of content categories is available in the applicable schema on [the API reference page](../subscription-profile-api-reference/).
```json
{ 
  "servicename": "DATA_CONTENT_FILTERING", 
  "config": {
    "forbidden_content": [
      "GAMBLING",
      "SOCIAL_MEDIA"
    ]
  }
}
```

### PRODUCT_BUNDLING
A full description of how to work with product bundling is offered [here][product-bundling-v1-docs].

### USER_CS_BLOCK services
These services allow the subscriber, when provisioned by the operator, to block incoming or outgoing CS calls on their handset.
`"active": true` activates the block as operator, the subscriber can unblock on their handset.
`"active": false` sets it to inactive, the subscriber can activate it on their handset.
```json
{ 
  "servicename": "USER_CS_BLOCK_IN", 
  "config": {
    "active": true
  }
}
```
```json
{ 
  "servicename": "USER_CS_BLOCK_OUT_INTER", 
  "config": {
    "active": false
  }
}
```

### VOICE_CALLER_ID_RESTRICTION
Active flag determines restriction mode, which is either permanent or temporary.
`"active": true` represents permanent restriction of caller ID, presenting caller ID is not configurable on handset.
`"active": false` represents the temporary restriction mode, where the network default is to present the caller ID. This mode enables the subscriber to configure visibility on handset.
```json
{ 
  "servicename": "VOICE_CALLER_ID_RESTRICTION",
  "config": {
    "active": true
  }
}
```
```json
{ 
  "servicename": "VOICE_CALLER_ID_RESTRICTION",
  "config": {
    "active": false
  }
}
```

### VOICE_CALLFORWARD
```json
{
  "servicename": "VOICE_CALLFORWARD",
  "config": {
    "unconditional": "46701234567"
  }
}
```
The above results in always forwarding incoming calls to the specified number.
`"unconditional_active": true` is derived from the presence of a valid number for the `unconditional` attribute.
```json
{
  "servicename": "VOICE_CALLFORWARD",
  "config": {
    "unconditional": "46701234567",
    "unconditional_active": false
  }
}
```
The above sets a number for the unconditional forwarding but does not activate any call forwarding.
```json
{
  "servicename": "VOICE_CALLFORWARD",
  "config": {
    "busy": "46701112233",
    "unreachable": "46702223311",
    "no_reply": "46703331122"
  }
}
```
The above enables conditional forwarding to the specified numbers.
They are all active by default as the numbers are valid.
```json
{
  "servicename": "VOICE_CALLFORWARD",
  "config": {
    "busy": "46701112233",
    "busy_active": false,
    "unreachable": "46702223311",
    "unreachable_active": true,
    "no_reply": "46703331122",
    "no_reply_active": false
  }
}
```
The above sets numbers for the three conditional forwarding rules, but only enables call forwarding for when the subscriber is not reachable.
```json
{ 
  "servicename": "VOICE_CALLFORWARD", 
  "config": {
    "unconditional": "46701234567",
    "busy": "46701112233",
    "unreachable": "46702223311",
    "no_reply": "46703331122"
  }
}
```
The above sets numbers and activates all varieties of forwarding.
Active unconditional number overrides all the active conditional numbers, and as such all calls would be forwarded to the number set for unconditional forwarding.
If unconditional gets deactivated, the active conditional forwarding rules would be used instead.

### VOICE_PREMIUM
The VOICE_PREMIUM service allows our customers to manually define premium numbers using Partner-Console. You can then choose to allow or disallow subscribers from calling or receiving calls from these premium numbers by enabling or disabling the VOICE_PREMIUM service. 

### Voice Premium Network Blocks
For VOICE_PREMIUM_INFO and VOICE_PREMIUM_ENTERTAINMENT services, the lists of premium numbers are defined by the network. Each network usually has a list of local premium numbers, and the WG2 HLR sends subscriber information (e.g. VOICE_PREMIUM_INFO blocked) to the VLR. The VLR then blocks calls to any premium info numbers based on the network's lists.
Please note: If these two services are not enabled for your tenant, no network blocks will be sent for your subscribers.

[product-bundling-v1-docs]:https://v1.docs.wgtwo.com/tutorial/bundling/bundling.html
