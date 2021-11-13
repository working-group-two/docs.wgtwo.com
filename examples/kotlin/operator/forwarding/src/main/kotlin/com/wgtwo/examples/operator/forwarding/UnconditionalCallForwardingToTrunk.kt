package com.wgtwo.examples.operator.forwarding

import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.callforward.v0.CallForwardingProto
import com.wgtwo.api.callforward.v0.CallForwardingServiceGrpc
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = CallForwardingServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val message = with(CallForwardingProto.TrunkCallForwardingRequest.newBuilder()) {
        this.subscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = "+4672xxxxxxx"
            build()
        }
        this.unconditionalTrunkForwarding = with(CallForwardingProto.UnconditionalTrunkForwarding.newBuilder()) {
            this.forwardToTrunk = with(CallForwardingProto.Trunk.newBuilder()) {
                this.id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                build()
            }
            build()
        }
        build()
    }

    val result = stub.setToTrunk(message)
    if (result.status == CallForwardingProto.CallForwardingResponse.Status.ACCEPTED) {
        println("Successfully set call forwarding")
    } else {
        println("""
            Failed to set call forwarding:
            status=${result.status}
            description=${result.errorMessage}"
        """.trimIndent())
    }
}
