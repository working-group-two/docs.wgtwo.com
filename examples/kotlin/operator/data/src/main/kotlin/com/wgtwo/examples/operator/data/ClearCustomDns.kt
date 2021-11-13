package com.wgtwo.examples.operator.data

import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.data.v0.DataProto
import com.wgtwo.api.data.v0.DataServiceGrpc
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
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
