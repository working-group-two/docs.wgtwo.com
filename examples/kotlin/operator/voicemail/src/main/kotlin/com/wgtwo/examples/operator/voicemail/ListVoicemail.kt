package com.wgtwo.examples.operator.voicemail

import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import com.wgtwo.api.voicemail.v0.VoicemailMediaServiceGrpc
import com.wgtwo.api.voicemail.v0.VoicemailProto

private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET") // Add your credentials
private val phoneNumber = "+47xxxxxxxx" // Target your desired user

private val channel = Clients.createChannel(Environment.PROD)
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
