import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.messaging.v0.VoicemailMediaServiceGrpc
import com.wgtwo.api.messaging.v0.VoicemailProto
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken(System.getenv("CLIENT_ID"), System.getenv("CLIENT_SECRET"))
private val stub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = VoicemailProto.GetAllVoicemailMetadataRequest.newBuilder()
        .setTo(
            PhoneNumberProto.PhoneNumber.newBuilder()
                .setE164("+47xxxxxxxx")
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
