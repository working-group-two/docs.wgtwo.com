package com.wgtwo.examples.operator.provision

import com.wgtwo.api.rest.ApiClient
import com.wgtwo.api.rest.handler.SubscriptionProfileApi
import com.wgtwo.api.rest.model.UpdateSubscriptionRequest
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService.NameEnum

private val apiClient = ApiClient().apply {
    setUsername("CLIENT_ID")
    setPassword("CLIENT_SECRET")
}
private val subscriptionProfileApi = SubscriptionProfileApi(apiClient)

fun main() {
    val request = UpdateSubscriptionRequest().apply {
        bssid = "IDENTIFIER PROVIDED BY WORKING GROUP TWO"
        msisdn = "47xxxxxxxx"
        services = UpdateSubscriptionRequestServices().apply {
            delete = listOf(NameEnum.ROAMING_DATA)
        }
    }
    subscriptionProfileApi.updateService(request)
}
