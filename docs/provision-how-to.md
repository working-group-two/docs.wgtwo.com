---
title: Manage subscriptions
topic: subscription profile
type: how-to
hideWarning: true
---

# How to provision services for subscribers

## Overview

This API allows to enable and disable capabilities for a subscription and get subscription information.
In order to access this API
your credentials need to have the `subscription.read` and `subscription.write` rights.

### Subscription API
This API allows you to retrieve information about the subscriber, including which services are enabled.

### Provision API
The API is based on a concept of actions with each action having a specific use case.
The `/provision/[ACTIONNAME]` endpoints manage provisioning requests. The requests instruct the
network to update user profiles. It is designed as a standard REST API where multiple requests can
be handled in parallel.

All requests use the POST HTTP method.

We verify that the API key supplied is authorised to operate on behalf of that network
and secondly that the user or MSISDN indicated in the request was created by the same network.

The API does not give access to the actual data stored about individual subscribers.

Standard replies:
* **201:** Provision success. Will return the request ID for the created resource.

Example:
```json
{
    "requestid": "f2feb5be78cf4b03a28834729c44e3a2",
}
```

* **400:** Invalid action arguments.
* **429:** Rate limit exceeded.
* **502:** Provision error.

As a general reporting strategy
the API responds with **201** to a duplicate request if the original was successful (idempotency).


#### Actions

##### ACTIVATE

Created when a new user gets created. Initially
the user will have the default services listed in the table below.
If a user already exists
method can be used to associate an ICCID to a subscription.

* **bssid:** ID of the network this request belongs with.
* **iccid:** ID of the SIM the number should be ported to.
* **msisdn:** The phone number to port.
* **userid:** Unique user ID for this subscription
this ID will be used for provisioning and CDR generation.

**Error cases:**
* iccid unknown
* iccid already associated with a different msisdn
* msisdn already associated with a different iccid

##### BLOCK

Created when all a user's services should be blocked. The user's data is preserved.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number to be blocked.
* **userid:** Unique user ID for this user.

**Error cases:**
* msisdn unknown

##### UNBLOCK

Created when all a user's existing services should be unblocked.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number to be unblocked
* **userid:** Unique user ID for this user.

**Error cases:**
* msisdn unknown

##### CHANGESIM

Created when the ICCID id for an MSISDN changes.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number for which the ICCID changes.
* **newIccid:** ICCID for the new SIM.
* **oldIccid:** ICCID for the old SIM.
* **userid:** Unique user ID for this user.

**Error cases:**
* newIccid unknown
* newIccid already associated with a different msisdn
* oldIccid not associated with msisdn

##### DISSOCIATESIM

Created when an ICCID is removed from a subscription.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** The phone number to remove the ICCID from.
* **iccid:** ID of the SIM the subscription should be removed from.
* **userid:** Unique user ID for this subscription.

**Error cases:**
* msisdn unknown
* iccid not associated with the given msisdn
* msisdn in not provisioned for given network id

##### CHANGEMSISDN

Created when the MSISDN for a SIM changes.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number currently attached to a sim.
* **newMsisdn:** Currently unused phone number that will be attached to the sim.
* **userid:** Unique user ID for this user.

**Error cases:**
* msisdn unknown
* newMsisdn already attached to a different sim

##### TERMINATE

Created when a user's service should be terminated. User data stored on Working Group Two server can be deleted after this point.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number to be terminated.
* **userid:** Unique user ID for this user.

**Error cases:**
* msisdn unknown

##### UPDATE

Created when a service for a customer changes.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number of users for which to update the services.
* **service:** Object containing the service with its required properties
which should be added or
removed for this user.
  * **action:** Either `ADD` or `REMOVE`.
  * **configuration:** Optional extra data to enable some services. Format is a JSON object.
  * **name:** Service name from the service list.
* **userid:** Unique user ID for this user.

##### Service list

_Items marked 'Default' will be enabled upon activation._
 
| Service name                   | Description                                                      | Configuration                                         | Default
| ------------------------------ | ---------------------------------------------------------------- | ----------------------------------------------------- | -------
| API_ACCESS_TO_OWN_SUBSCRIPTION | Access to own subscription through API                           | N/A                                                   |
| DATA                           | Capped data speed                                                | N/A                                                   |
| DATA_HIGHSPEED                 | Uncapped data speed                                              | N/A                                                   | Y
| DATA_TETHERING                 | Share data through tethering                                     | N/A                                                   |
| EVENT_STREAMING                | Include events from this subscriber in events API (as operator)  | `{"types": ["*"]}` or e.g. `{"types": ["VOICEMAIL"]}` | 
| EXTERNAL_POLICY_CONTROL        | Call external policy control                                     | N/A                                                   |
| MMS_IN                         | Incoming MMS                                                     | N/A                                                   | Y
| MMS_OUT                        | Outgoing MMS                                                     | N/A                                                   | Y
| ROAMING                        | Calls                                                            | N/A                                                   |
| ROAMING_DATA                   | Data access while roaming                                        | N/A                                                   |
| SMS_IN                         | Incoming SMS                                                     | N/A                                                   | Y
| SMS_OUT                        | Outgoing domestic SMS                                            | N/A                                                   | Y
| SMS_OUT_INTER                  | International SMS                                                | N/A                                                   | Y
| SMS_PREMIUM                    | Premium content SMS                                              | N/A                                                   |
| VOICE_CALLFORWARD              | Forward calls                                                    | 1 or more "condition" : "fwd_number" with condition in  unconditional \| busy \| no_reply \| unreachable
| VOICE_CALLWAITING              | If busy, let new callers wait instead of dropping with busy tone | N/A                                                   |
| VOICE_IN                       | Incoming calls                                                   | N/A                                                   | Y
| VOICE_MISSED_CALL_ALERT        | Missed call alert                                                | N/A                                                   | Y
| VOICE_OUT                      | Outgoing domestic calls                                          | N/A                                                   | Y
| VOICE_OUT_INTER                | International calls                                              | N/A                                                   |
| VOICE_PREMIUM                  | Premium content calls                                            | N/A                                                   |
| VOICE_VOICEMAIL                | Voicemail service                                                | N/A                                                   | Y
| VOICE_VOLTE                    | Voice calls over LTE                                             | N/A                                                   |
| VOICE_VOWIFI                   | Voice calls over WiFi                                            | N/A                                                   |
| VOICEMAIL_DISABLE_NOTIFICATION | Disable voicemail notifications                                  | N/A                                                   |

**Error cases:**
* msisdn unknown
* service name unknown

## Examples

<DemoConfigurer />

### HTTP
#### Subscription info

```shell script
curl -s\
  -u ${CLIENT_ID}:${CLIENT_SECRET} \
  https://api.wgtwo.com/subscription/v1/msisdn/46737678218
```

#### Provision

_All requests in these examples return a 201 status with a JSON body containing a `requestid` property._

**New user signs up**

```shell script
POST /provision/v1/v1/activate HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "iccid": "2420198416000015720",
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

**User loses phone (permanently) and needs a replacement SIM**

_Depending on the logistics of getting a new SIM just using `/provision/changesim` can also work,
since the old SIM already becomes unfunctional after changesim._

```shell script
POST /provision/v1/block HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

```shell script
POST /provision/v1/changesim HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "msisdn": "46737678218",
    "newIccid": "2420198416000015720",
    "oldIccid": "2420198412148748973",
    "userid": "abcdefghijklm"
}
```

```shell script
POST /provision/v1/unblock HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

**User misplaces then finds phone** _or_ **User freezes subscription for a period**

```shell script
POST /provision/v1/block HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

... (at some later time)

```shell script
POST /provision/v1/unblock HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

**User data consumption exceeds limit (delete DATA_HIGHSPEED service)**

```shell script
POST /provision/v1/update HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "service": {
        "action": "REMOVE",
        "name": "DATA_HIGHSPEED"
    },
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

**User wants to disable all roaming functionality (delete ROAMING and ROAMING_DATA services)**
```shell script
POST /provision/v1/update HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "service": {
        "action": "REMOVE",
        "name": "ROAMING"
    },
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

```shell script
POST /provision/v1/update HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "service": {
        "action": "REMOVE",
        "name": "ROAMING_DATA"
    },
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

**User upgrades plan to allow roaming (add ROAMING service)**

```shell script
POST /provision/v1/update HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "service": {
        "action": "ADD",
        "name": "ROAMING"
    },
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

**User wants to terminate subscription**

```shell script
POST /provision/v1/terminate HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "msisdn": "46737678218",
    "userid": "abcdefghijklm"
}
```

**Incorrect MSISDN was assigned to a SIM**

```shell script
POST /provision/v1/changemsisdn HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "msisdn": "46737678218",
    "newMsisdn": "46727678209",
    "userid": "abcdefghijklm"
}
```

**Remove SIM from subscription with more than one SIM associated to it**

```shell script
POST /provision/v1/dissociateSim HTTP/1.1
Host: api.wgtwo.com
Authorization: Basic ${OPERATOR_TOKEN}
Content-Type: application/json

{
    "bssid": "operator_name",
    "msisdn": "46737678218",
    "iccid": "2420198416000015720",
    "userid": "abcdefghijklm"
}
```


### Java / Kotlin

#### Install dependencies
<JitpackDependency />

Then you can add the required dependency:

<ClientDependencies :clients="['rest']"/>

#### Get information about subscriber
e.g. enabled services
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/GetSubscriptionInfo.kt" language="kotlin" />

#### Update service
e.g. enable data roaming
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/EnableRoamingData.kt" language="kotlin" />

#### Update service
e.g. disable data roaming
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/DisableRoamingData.kt" language="kotlin" />
