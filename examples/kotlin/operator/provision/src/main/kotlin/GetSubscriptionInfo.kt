import com.wgtwo.api.rest.ApiClient
import com.wgtwo.api.rest.handler.SubscriptionProfileApi

private val apiClient = ApiClient().apply {
    setUsername("CLIENT_ID")
    setPassword("CLIENT_SECRET")
}
private val subscriptionProfileApi = SubscriptionProfileApi(apiClient)

fun main() {
    val subscription = subscriptionProfileApi.getSubscription("47xxxxxxxx")
    println("My enabled services: ${subscription.services!!.keys}")
}
