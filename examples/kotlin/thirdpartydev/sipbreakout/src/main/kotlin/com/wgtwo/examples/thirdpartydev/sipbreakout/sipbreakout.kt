package com.wgtwo.examples.thirdpartydev.sipbreakout;

import com.wgtwo.api.common.Environment
import com.wgtwo.api.sipbreakout.v0.RegistrationRequest
import com.wgtwo.api.sipbreakout.v0.SipBreakoutServiceGrpcKt
import com.wgtwo.api.util.auth.BearerToken
import com.wgtwo.api.util.auth.Channels
import io.grpc.StatusException
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.runBlocking

private val channel = Channels.createChannel(Environment.SANDBOX)
private val credentials =
    BearerToken { "MY_ACCESS_TOKEN" } // Add your _client credentials_ access token (not user access token)
private val stub = SipBreakoutServiceGrpcKt.SipBreakoutServiceCoroutineStub(channel)
    .withCallCredentials(credentials)

@ExperimentalCoroutinesApi
fun main() {

    // building RegistrationRequest
    val request = RegistrationRequest.newBuilder().apply {
        suri = "sips:example.com:8888"
        moPrefix = "11"
        mtPrefix = "22"
        routeType = RegistrationRequest.RouteType.LOOP
    }.build()

    runBlocking {
        try {
            var response = stub.upsertRegistration(request)
            println("upsert: got response $response")

            response = stub.deleteRegistration(request)
            println("delete: got response $response")
        } catch (e : StatusException) {
            println("got error $e")
        }
    }

}
