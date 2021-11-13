package com.wgtwo.examples.thirdpartydev.forwarding

import com.wgtwo.api.callforward.v0.CallForwardingProto
import com.wgtwo.api.callforward.v0.CallForwardingServiceGrpc
import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.util.auth.BearerToken
import com.wgtwo.api.util.auth.Channels

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val credentials = BearerToken { "MY_ACCESS_TOKEN" } // Add your credentials
private val stub = CallForwardingServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val message = with(CallForwardingProto.NumberCallForwardingRequest.newBuilder()) {
        this.subscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = "+4672xxxxxxx"
            build()
        }
        this.conditional = with(CallForwardingProto.Conditional.newBuilder()) {
            this.busy = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
                this.e164 = "+4672xxxxxxx"
                build()
            }
            this.unavailable = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
                this.e164 = "+4672xxxxxxx"
                build()
            }
            build()
        }
        build()
    }

    val result = stub.setToNumber(message)
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
