---
title: Manage subscriptions
topic: subscription profile
type: how-to
hideWarning: true
---

# How to manage subscriptions

<DemoConfigurer />

## Get subscription info
<CodeSnippet
  curlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/curl/operator/provision/get-subscription-info.sh"
  :kotlinDeps="['rest']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/GetSubscriptionInfo.kt"
  />

## Activate new user

```shell script
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
```

## Provision replacement SIM

_Depending on the logistics of getting a new SIM just using `/provision/changesim` can also work,
since the old SIM already becomes unfunctional after changesim._

**Steps**

1. [Block the subscription](#block-subscription)
2. [Change the SIM](#change-sim)
3. [Unblock subscription](#unblock-subscription)

## Block subscription

```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "msisdn": "46737678218",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/block
```

## Change SIM

```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "msisdn": "46737678218",
        "newIccid": "2420198416000015720",
        "oldIccid": "2420198412148748973",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/changesim
```

## Unblock subscription

```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "msisdn": "46737678218",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/unblock
```

## Freeze subscription

See [block subscription](#block-subscription)

## Unfreeze subscription

See [unblock subscription](#unblock-subscription)

## Restrict highspeed data

```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "service": {
            "action": "REMOVE",
            "name": "DATA_HIGHSPEED"
        },
        "msisdn": "46737678218",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/update
```

## Disable roaming

**Steps**

1. [Remove roaming](#remove-roaming)
2. [Remove roaming data](#remove-roaming-data)

## Remove roaming

```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "service": {
            "action": "REMOVE",
            "name": "ROAMING"
        },
        "msisdn": "46737678218",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/update
```

## Remove roaming data
<CodeSnippet
  curlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/curl/operator/provision/disable-roaming-data.sh"
  :kotlinDeps="['rest']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/DisableRoamingData.kt"
  />

## Enable roaming

**Steps**

1. [Add roaming](#add-roaming)
2. [Add roaming data](#add-roaming-data)

## Add roaming
```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "service": {
            "action": "ADD",
            "name": "ROAMING"
        },
        "msisdn": "46737678218",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/update
```

## Add roaming data

<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/EnableRoamingData.kt" language="kotlin" />

## Terminate subscription

```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "msisdn": "46737678218",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/terminate
```

## Change MSISDN for a SIM

```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "msisdn": "46737678218",
        "newMsisdn": "46727678209",
        "userid": "abcdefghijklm"
    } ' \
    https://api.wgtwo.com/provision/v1/changemsisdn
```

## Remove a SIM from subscription

```shell script
curl \
    -u ${CLIENT_ID}:${CLIENT_SECRET} \
    -H 'Content-Type: application/json'
    -d '
    {
        "bssid": "operator_name",
        "msisdn": "46737678218",
        "iccid": "2420198416000015720",
        "userid": "abcdefghijklm"
    }
    ' \
    https://api.wgtwo.com/provision/v1/dissociateSim
```
