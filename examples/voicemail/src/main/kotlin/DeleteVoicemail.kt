import com.wgtwo.api.common.Environment
import com.wgtwo.api.voicemail.v0.VoicemailMediaServiceGrpc
import com.wgtwo.api.voicemail.v0.VoicemailProto
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = VoicemailProto.DeleteVoicemailRequest.newBuilder()
        .setVoicemailId("voicemail-uuid")
        .build()
    stub.deleteVoicemail(request)
}
