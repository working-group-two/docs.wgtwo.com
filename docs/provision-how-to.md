---
title: Manage subscriptions
topic: subscription profile
type: how-to
hideWarning: true
---

# How to manage subscriptions

<DemoConfigurer />

## HTTP

_All requests in these examples return a 201 status with a JSON body containing a `requestid` property, unless otherwise stated_.

### Get subscription info

```shell script
curl -s\
  -u ${CLIENT_ID}:${CLIENT_SECRET} \
  https://api.wgtwo.com/subscription/v1/msisdn/46737678218
```

Returns 200 and user data

### Sign up new user

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

#### Provision replacement SIM

_Depending on the logistics of getting a new SIM just using `/provision/changesim` can also work,
since the old SIM already becomes unfunctional after changesim._

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
    ' /
    https://api.wgtwo.com/provision/v1/block
```

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

### Freeze subscription

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

### Unfreeze subscription

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

### Restrict highspeed data

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

### Disable all roaming
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

```shell script
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
```

### Add roaming

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

### Terminate subscription

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

### Change MSISDN for a SIM

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

### Remove a SIM from subscription

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


## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add the required dependency:

<ClientDependencies :clients="['rest']"/>

### Get subscriber enabled services
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/GetSubscriptionInfo.kt" language="kotlin" />

### Enable data roaming
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/EnableRoamingData.kt" language="kotlin" />

### Disable data roaming
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/DisableRoamingData.kt" language="kotlin" />
