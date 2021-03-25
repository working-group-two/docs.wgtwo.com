package com.wgtwo.examples.operator.voicemail

import com.wgtwo.api.common.Environment
import com.wgtwo.api.voicemail.v0.VoicemailMediaServiceGrpc
import com.wgtwo.api.voicemail.v0.VoicemailProto
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET") // Add your credentials
private val voicemailUuid = "voicemail-uuid" // Target voicemail to mark as read

private val channel = Clients.createChannel(Environment.PROD)
private val stub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = VoicemailProto.MarkVoicemailAsReadRequest.newBuilder()
        .setVoicemailId(voicemailUuid)
        .build()
    stub.markVoicemailAsRead(request)
}
