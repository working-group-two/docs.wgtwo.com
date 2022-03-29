package com.wgtwo.examples.thirdpartydev.voicemail

import com.wgtwo.api.common.Environment
import com.wgtwo.api.v0.common.PhoneNumberProto
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.BearerToken
import com.wgtwo.api.v0.voicemail.VoicemailMediaServiceGrpc
import com.wgtwo.api.v0.voicemail.VoicemailProto

private val credentials = BearerToken { "MY_ACCESS_TOKEN" } // Add your credentials
private val phoneNumber = "+47xxxxxxxx" // Target your desired user

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val stub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = VoicemailProto.GetAllVoicemailMetadataRequest.newBuilder()
        .setTo(
            PhoneNumberProto.PhoneNumber.newBuilder()
                .setE164(phoneNumber)
                .build()
        )
        .build()
    val response: VoicemailProto.GetAllVoicemailMetadataResponse = stub.getAllVoicemailMetadata(request)
    val metadataList: List<VoicemailProto.VoicemailMetadata> = response.metadataList
    when {
        metadataList.isEmpty() -> println("No voicemails found")
        else -> metadataList.forEach { println(it) }
    }
}
