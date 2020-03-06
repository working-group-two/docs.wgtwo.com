---
title: Manage subscriptions
topic: subscription profile
type: how-to
codeEnableRoamingData: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/provision/src/main/kotlin/EnableRoamingData.kt
codeDisableRoamingData: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/provision/src/main/kotlin/DisableRoamingData.kt
codeGetSubscriptionInfo: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/provision/src/main/kotlin/GetSubscriptionInfo.kt
---

# How to provision services for subscribers

## Overview

This API allows to enable and disable capabilities for a subscription and get subscription information.
In order to access this API, your credentials need to have the `subscription.read` and `subscription.write` rights.
You can configure your credentials in [Console](https://console.wgtwo.com/api-keys-redirect).

<DemoConfigurer />

## curl

### Get information about subscriber
```shell script
curl -s \
  -u ${CLIENT_ID}:${CLIENT_SECRET} \
  https://api.wgtwo.com/subscription/v1/msisdn/47xxxxxxxx
```

### Update service, e.g. enable data roaming
```shell script
curl -s \
  -u ${CLIENT_ID}:${CLIENT_SECRET} \
  -H "Content-Type: application/json" \
  -d '
  {
    "bssid": "<<OPERATOR_NAME>>",
    "service": {
      "name": "ROAMING_DATA",
      "action": "ADD"
    },
    "msisdn": "47xxxxxxxx",
    "userid": "my-user-id"
  }
  ' \
  https://api.wgtwo.com/provision/v1/update
```

### Update service, e.g. disable data roaming
```shell script
curl -s \
  -u ${CLIENT_ID}:${CLIENT_SECRET} \
  -H "Content-Type: application/json" \
  -d '
  {
    "bssid": "<<OPERATOR_NAME>>",
    "service": {
      "name": "ROAMING_DATA",
      "action": "REMOVE"
    },
    "msisdn": "47xxxxxxxx",
    "userid": "my-user-id"
  }
  ' \
  https://api.wgtwo.com/provision/v1/update
```

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add the required dependency:

<ClientDependencies :clients="['rest']"/>

### Get information about subscriber, e.g. enabled services
<GithubCode :to="$frontmatter.codeGetSubscriptionInfo" />

### Update service, e.g. enable data roaming
<GithubCode :to="$frontmatter.codeEnableRoamingData" />

### Update service, e.g. disable data roaming
<GithubCode :to="$frontmatter.codeDisableRoamingData" />
