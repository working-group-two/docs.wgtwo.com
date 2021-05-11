package com.wgtwo.examples.thirdpartydev.data

import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.data.v0.DataProto
import com.wgtwo.api.data.v0.DataServiceGrpc
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.AccessToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = AccessToken("ACCESS_TOKEN") // Add your credentials
private val stub = DataServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val message = with(DataProto.ClearCustomDnsRequest.newBuilder()) {
        this.subscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = "+4672xxxxxxx"
            build()
        }
        build()
    }

    val result = stub.clearCustomDns(message)
    if (result.status == DataProto.CustomDnsResponse.Status.ACCEPTED) {
        println("Successfully cleared DNS config")
    } else {
        println("""
            Failure to clear DNS config:
            status=${result.status}
            description=${result.errorMessage}"
        """.trimIndent())
    }
}
