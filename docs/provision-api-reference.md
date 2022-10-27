---
title: Subscription actions
topic: subscription profile
type: api-reference
hideWarning: true
---

# Subscription actions

## ACTIVATE

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

## BLOCK

Created when all a user's services should be blocked. The user's data is preserved.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number to be blocked.
* **userid:** Unique user ID for this user.

**Error cases:**
* msisdn unknown

## UNBLOCK

Created when all a user's existing services should be unblocked.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number to be unblocked
* **userid:** Unique user ID for this user.

**Error cases:**
* msisdn unknown

## CHANGESIM

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

## DISSOCIATESIM

Created when an ICCID is removed from a subscription.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** The phone number to remove the ICCID from.
* **iccid:** ID of the SIM the subscription should be removed from.
* **userid:** Unique user ID for this subscription.

**Error cases:**
* msisdn unknown
* iccid not associated with the given msisdn
* msisdn in not provisioned for given network id

## CHANGEMSISDN

Created when the MSISDN for a SIM changes.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number currently attached to a sim.
* **newMsisdn:** Currently unused phone number that will be attached to the sim.
* **userid:** Unique user ID for this user.

**Error cases:**
* msisdn unknown
* newMsisdn already attached to a different sim

## TERMINATE

Created when a user's service should be terminated. User data stored on Working Group Two server can be deleted after this point.

* **bssid:** ID of the network this request belongs with.
* **msisdn:** Phone number to be terminated.
* **userid:** Unique user ID for this user.

**Error cases:**
* msisdn unknown

## UPDATE

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

## Service list

_Items marked 'Default' will be enabled upon activation._
 
| Service name                   | Description                                                      | Configuration                                         | Default
|--------------------------------|------------------------------------------------------------------|-------------------------------------------------------| -------
| DATA                           | Capped data speed                                                | N/A                                                   |
| DATA_HIGHSPEED                 | Uncapped data speed                                              | N/A                                                   | Y
| DATA_TETHERING                 | Share data through tethering                                     | N/A                                                   |
| MMS_IN                         | Incoming MMS                                                     | N/A                                                   | Y
| MMS_OUT                        | Outgoing MMS                                                     | N/A                                                   | Y
| MMS_OUT_INTER                  | International MMS                                                | N/A                                                   | Y
| PRODUCT_BUNDLING               | Include products from ecosystem                                  | "products": ["productCode1", "productCode2"]          |
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
