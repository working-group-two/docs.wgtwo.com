package com.wgtwo.examples.operator.sms

import com.google.protobuf.ByteString
import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.sms.v0.SmsProto
import com.wgtwo.api.sms.v0.SmsServiceGrpc
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = SmsServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

private fun hexStringToByteArray(s: String): ByteArray {
    val len = s.length
    val data = ByteArray(len / 2)
    var i = 0
    while (i < len) {
        data[i / 2] = ((Character.digit(s[i], 16) shl 4) + Character.digit(s[i + 1], 16)).toByte()
        i += 2
    }
    return data
}

fun main() {
    val message = with(SmsProto.SendBinaryToSubscriberRequest.newBuilder()) {
        this.content = ByteString.copyFrom(hexStringToByteArray("FFFF0000FFFF0000"))
        this.fromTextAddress = with(PhoneNumberProto.TextAddress.newBuilder()) {
            this.textAddress = "Test"
            build()
        }
        this.toSubscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = "+47xxxxxxxx"
            build()
        }
        this.messageClass = SmsProto.SendBinaryToSubscriberRequest.MessageClass.CLASS3
        build()
    }

    val result = stub.sendBinaryToSubscriber(message)
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
