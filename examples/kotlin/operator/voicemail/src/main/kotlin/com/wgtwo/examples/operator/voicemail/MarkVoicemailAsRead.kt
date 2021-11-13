package com.wgtwo.examples.operator.voicemail

import com.wgtwo.api.common.Environment
import com.wgtwo.api.voicemail.v0.VoicemailMediaServiceGrpc
import com.wgtwo.api.voicemail.v0.VoicemailProto
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.OperatorToken

private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET") // Add your credentials
private val voicemailUuid = "voicemail-uuid" // Target voicemail to mark as read

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val stub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = VoicemailProto.MarkVoicemailAsReadRequest.newBuilder()
        .setVoicemailId(voicemailUuid)
        .build()
    stub.markVoicemailAsRead(request)
}
