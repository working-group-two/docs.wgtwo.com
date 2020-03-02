---
title: Manage subscriptions 
topic: subscription profile
type: how-to
---

# How to provision services for subscribers

## Overview

To update services for your subscribers, you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect) for `subscription.read` and/or `subscription.write`.

### Install dependencies
<JitpackDependency />

Then you can add the required dependency:

```xml
<dependencies>
    <dependency>
        <groupId>com.github.working-group-two.wgtwoapis</groupId>
        <artifactId>rest</artifactId>
        <version>acbf554461c3b22dbf2184de983b74b1d331ee48</version>
    </dependency>
</dependencies>
```

### Initialize your dependencies
```kotlin
import com.wgtwo.api.rest.ApiClient
import com.wgtwo.api.rest.handler.ProvisionApi
import com.wgtwo.api.rest.handler.SubscriptionApi

val apiClient = ApiClient().apply {
    setUsername("CLIENT_ID")
    setPassword("CLIENT_SECRET")

    // basePath can be specified for test purposes, defaults to https://api.wgtwo.com
    // basePath = https://apigateway.dub.dev.wgtwo.com
}

val subscriptionProfileApi = SubscriptionProfileApi(apiClient)
```

## Update service, e.g. enable data roaming
```kotlin
import com.wgtwo.api.rest.model.UpdateSubscriptionRequest
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService.ActionEnum
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService.NameEnum

val request = UpdateSubscriptionRequest().apply {
    bssid = "IDENTIFIER PROVIDED BY WORKING GROUP TWO"
    msisdn = "47xxxxxxxx"
    userid = "my user ID"
    service = UpdateSubscriptionRequestService().apply { 
        action = ActionEnum.ADD
        name = NameEnum.ROAMING_DATA
    }
}
subscriptionProfileApi.updateService(request)
```

## Update service, e.g. disable data roaming
```kotlin
import com.wgtwo.api.rest.model.UpdateSubscriptionRequest
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService.ActionEnum
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService.NameEnum

val request = UpdateSubscriptionRequest().apply {
    bssid = "IDENTIFIER PROVIDED BY WORKING GROUP TWO"
    msisdn = "47xxxxxxxx"
    userid = "my user ID"
    service = UpdateSubscriptionRequestService().apply { 
        action = ActionEnum.REMOVE
        name = NameEnum.ROAMING_DATA
    }
}
subscriptionProfileApi.updateService(request)
```

## Get information about subscriber, e.g. enabled services
```kotlin
import com.wgtwo.api.rest.model.Subscription

val subscription = subscriptionProfileApi.getSubscription("47xxxxxxxx")
println("My enabled services: ${subscription.services!!.keys}")
```
