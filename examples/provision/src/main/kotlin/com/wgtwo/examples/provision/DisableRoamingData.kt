package com.wgtwo.examples.provision

import com.wgtwo.api.rest.ApiClient
import com.wgtwo.api.rest.handler.SubscriptionProfileApi
import com.wgtwo.api.rest.model.UpdateSubscriptionRequest
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService.ActionEnum
import com.wgtwo.api.rest.model.UpdateSubscriptionRequestService.NameEnum

private val apiClient = ApiClient().apply {
    setUsername(System.getenv("CLIENT_ID"))
    setPassword(System.getenv("CLIENT_SECRET"))
}
private val subscriptionProfileApi = SubscriptionProfileApi(apiClient)

fun main() {
    val request = UpdateSubscriptionRequest().apply {
        bssid = "IDENTIFIER PROVIDED BY WORKING GROUP TWO"
        msisdn = "47xxxxxxxx"
        userid = "unique user ID for this subscription"
        service = UpdateSubscriptionRequestService().apply {
            action = ActionEnum.REMOVE
            name = NameEnum.ROAMING_DATA
        }
    }
    subscriptionProfileApi.updateService(request)
}
