import com.wgtwo.api.common.Environment
import com.wgtwo.api.messaging.v0.VoicemailMediaServiceGrpc
import com.wgtwo.api.messaging.v0.VoicemailProto
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import com.wgtwo.api.util.phonenumber.PhoneNumbers

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken(System.getenv("CLIENT_ID"), System.getenv("CLIENT_SECRET"))
private val stub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

private fun String.toPhoneNumberProto() = PhoneNumbers.toPhoneNumberProto(PhoneNumbers.of(this))

fun main() {
    val request = VoicemailProto.GetAllVoicemailMetadataRequest.newBuilder()
        .setTo("+47 xxx xx xxx".toPhoneNumberProto())
        .build()
    val response: VoicemailProto.GetAllVoicemailMetadataResponse = stub.getAllVoicemailMetadata(request)
    val metadataList: List<VoicemailProto.VoicemailMetadata> = response.metadataList
    when {
        metadataList.isEmpty() -> println("No voicemails found")
        else -> metadataList.forEach { println(it) }
    }
}
