package com.wgtwo.examples.operator.forwarding

import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.callforward.v0.CallForwardingProto
import com.wgtwo.api.callforward.v0.CallForwardingServiceGrpc
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = CallForwardingServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val message = with(CallForwardingProto.DisableCallForwardingRequest.newBuilder()) {
        this.subscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = "+4672xxxxxxx"
            build()
        }
        build()
    }

    val result = stub.disable(message)
    if (result.status == CallForwardingProto.CallForwardingResponse.Status.ACCEPTED) {
        println("Successfully disabled call forwarding")
    } else {
        println("""
            Failure to disable call forwarding:
            status=${result.status}
            description=${result.errorMessage}"
        """.trimIndent())
    }
}
