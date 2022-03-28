package com.wgtwo.examples.thirdpartydev.sipbreakout;

import com.wgtwo.api.common.Environment
import com.wgtwo.api.v0.sipbreakout.DeleteRegistrationRequest
import com.wgtwo.api.v0.sipbreakout.Registration
import com.wgtwo.api.v0.sipbreakout.RouteType
import com.wgtwo.api.v0.sipbreakout.SipBreakoutServiceGrpcKt
import com.wgtwo.api.v0.sipbreakout.UpsertRegistrationRequest
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

    val registration = Registration.newBuilder().apply {
        sipUri = "sips:example.com:8888"
        mobileOriginatingPrefix = "11"
        mobileTerminatingPrefix = "22"
        routeType = RouteType.ROUTE_TYPE_LOOP
    }.build()

    // building RegistrationRequest
    val upsertRequest = UpsertRegistrationRequest.newBuilder()
        .setRegistration(registration)
        .build()
    val deleteRequest = DeleteRegistrationRequest.newBuilder()
        .setRegistration(registration)
        .build()

    runBlocking {
        try {
            val upsertRsesponse = stub.upsertRegistration(upsertRequest)
            println("upsert: got response $upsertRsesponse")

            val deleteResponse = stub.deleteRegistration(deleteRequest)
            println("delete: got response $deleteResponse")
        } catch (e : StatusException) {
            println("got error $e")
        }
    }

}
