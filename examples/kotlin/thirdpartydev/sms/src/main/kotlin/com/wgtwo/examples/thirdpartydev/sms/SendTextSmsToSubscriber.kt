package com.wgtwo.examples.thirdpartydev.sms

import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.sms.v0.SmsProto
import com.wgtwo.api.sms.v0.SmsServiceGrpc
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.UserToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = UserToken("ACCESS_TOKEN") // Add your credentials
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
