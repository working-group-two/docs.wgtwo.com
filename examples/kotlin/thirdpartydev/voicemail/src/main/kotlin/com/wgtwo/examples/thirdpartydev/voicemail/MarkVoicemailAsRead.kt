package com.wgtwo.examples.thirdpartydev.voicemail

import com.wgtwo.api.common.Environment
import com.wgtwo.api.v0.voicemail.VoicemailMediaServiceGrpc
import com.wgtwo.api.v0.voicemail.VoicemailProto
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.BearerToken

private val credentials = BearerToken { "MY_ACCESS_TOKEN" } // Add your credentials
private val voicemailUuid = "voicemail-uuid" // Target voicemail to mark as read

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val stub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = VoicemailProto.MarkVoicemailAsReadRequest.newBuilder()
        .setVoicemailId(voicemailUuid)
        .build()
    stub.markVoicemailAsRead(request)
}
