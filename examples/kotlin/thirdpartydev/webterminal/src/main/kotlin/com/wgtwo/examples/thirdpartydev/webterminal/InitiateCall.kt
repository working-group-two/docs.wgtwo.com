package com.wgtwo.examples.thirdpartydev.webterminal

import com.wgtwo.api.common.Environment
import com.wgtwo.api.v0.common.PhoneNumberProto
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.BearerToken
import com.wgtwo.api.v0.webterminal.WebTerminalMessage
import com.wgtwo.api.v0.webterminal.WebTerminalServiceGrpcKt
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.onCompletion
import kotlinx.coroutines.runBlocking
import java.util.*

private val channel = Channels.createChannel(Environment.SANDBOX)
private val credentials =
    BearerToken { "MY_ACCESS_TOKEN" } // Add your _client credentials_ access token (not user access token)
private val stub = WebTerminalServiceGrpcKt.WebTerminalServiceCoroutineStub(channel)
    .withCallCredentials(credentials)

@ExperimentalCoroutinesApi
fun main() {
    // your calles's MSISDN goes here
    val to = "1234567890"

    // your SDP goes here
    val sdp = ""

    // Pipe() ignores callId, but it's mandatory for MultiPipe()
    val callId = UUID.randomUUID().toString()

    // building Offer
    val toPhone = PhoneNumberProto.PhoneNumber.newBuilder().setE164(to).build()
    val offer = WebTerminalMessage.newBuilder().apply {
        offerBuilder.also {
            it.msisdn = toPhone
            it.sdp = sdp
        }
        this.callId = callId
    }.build()

    val requests = flow<WebTerminalMessage> {
        emit(offer)
    }

    runBlocking {
        stub.pipe(requests).onCompletion {
            println("stream closed")
        }.catch { t ->
            println("got error $t")
        }.collect {
            println("got message $it")
        }
    }
}
