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

**Error cases:**
* msisdn unknown
* service name unknown

### Service list

The list of services available to provision is found here: [list of services](https://docs.wgtwo.com/subscription-profile/subscription-services/)
