---
title: Manage subscriptions 
topic: subscription profile
type: how-to
codeEnableRoamingData: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/provision/src/main/kotlin/EnableRoamingData.kt
codeDisableRoamingData: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/provision/src/main/kotlin/DisableRoamingData.kt
codeGetSubscriptionInfo: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/provision/src/main/kotlin/GetSubscriptionInfo.kt
---

# How to provision services for subscribers

## Token/credentials
* [Create credentials in Console](https://console.wgtwo.com/api-keys-redirect)

  Required right: `subscription.read`, `subscription.write`

### Install dependencies
<JitpackDependency />

Then you can add the required dependency:

<ClientDependencies :clients="['rest']"/>

## Update service, e.g. enable data roaming
<GithubCode :to="$frontmatter.codeEnableRoamingData" />

## Update service, e.g. disable data roaming
<GithubCode :to="$frontmatter.codeDisableRoamingData" />

## Get information about subscriber, e.g. enabled services
<GithubCode :to="$frontmatter.codeGetSubscriptionInfo" />
