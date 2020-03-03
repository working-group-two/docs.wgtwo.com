package com.wgtwo.examples.provision

import com.wgtwo.api.rest.ApiClient
import com.wgtwo.api.rest.handler.SubscriptionProfileApi

private val apiClient = ApiClient().apply {
    setUsername(System.getenv("CLIENT_ID"))
    setPassword(System.getenv("CLIENT_SECRET"))
}
private val subscriptionProfileApi = SubscriptionProfileApi(apiClient)

fun main() {
    val subscription = subscriptionProfileApi.getSubscription("47xxxxxxxx")
    println("My enabled services: ${subscription.services!!.keys}")
}
