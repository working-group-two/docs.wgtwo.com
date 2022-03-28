package com.wgtwo.examples.thirdpartydev.sms

import com.wgtwo.api.common.Environment
import com.wgtwo.api.v0.common.PhoneNumberProto
import com.wgtwo.api.v0.sms.SmsProto
import com.wgtwo.api.v0.sms.SmsServiceGrpc
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.BearerToken

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val credentials = BearerToken { "MY_ACCESS_TOKEN" } // Add your credentials
private val stub = SmsServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val message = with(SmsProto.SendTextToSubscriberRequest.newBuilder()) {
        this.content = "My SMS content"
        this.fromTextAddress = with(PhoneNumberProto.TextAddress.newBuilder()) {
            this.textAddress = "Test"
            build()
        }
        this.toSubscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = "+47xxxxxxxx"
            build()
        }
        build()
    }

    val result = stub.sendTextToSubscriber(message)
    if (result.status == SmsProto.SendResponse.SendStatus.SEND_OK) {
        println("Successfully sent message")
    } else {
        println("""
            Failure to send message:
            status=${result.status}
            description=${result.description}"
        """.trimIndent())
    }
}
