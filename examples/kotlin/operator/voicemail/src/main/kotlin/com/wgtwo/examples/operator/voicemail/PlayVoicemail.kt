package com.wgtwo.examples.operator.voicemail

import com.wgtwo.api.common.Environment
import com.wgtwo.api.voicemail.v0.VoicemailMediaServiceGrpc
import com.wgtwo.api.voicemail.v0.VoicemailProto
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.OperatorToken
import javax.sound.sampled.AudioInputStream
import javax.sound.sampled.AudioSystem
import javax.sound.sampled.Clip
import javax.sound.sampled.DataLine

private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET") // Add your credentials
private val voicemailUuid = "voicemail-uuid" // Target voicemail to play

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val stub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = VoicemailProto.GetVoicemailRequest.newBuilder()
        .setVoicemailId(voicemailUuid)
        .build()
    val voicemail = stub.getVoicemail(request)

    val tempFile = createTempFile(prefix = "voicemail-", suffix = ".wav")
    val outputStream = tempFile.outputStream()
    when (voicemail.bytesCase) {
        VoicemailProto.GetVoicemailResponse.BytesCase.WAV -> voicemail.wav.writeTo(outputStream)
        else -> throw IllegalStateException("Not supported: " + voicemail.bytesCase)
    }
    outputStream.close()

    val inputStream: AudioInputStream = AudioSystem.getAudioInputStream(tempFile)
    val info = DataLine.Info(Clip::class.java, inputStream.format)
    val clip = AudioSystem.getLine(info) as Clip
    clip.open(inputStream)
    clip.start()

    // Wait for clip to stop playing
    Thread.sleep(clip.microsecondLength / 1000)
    clip.close()
}
