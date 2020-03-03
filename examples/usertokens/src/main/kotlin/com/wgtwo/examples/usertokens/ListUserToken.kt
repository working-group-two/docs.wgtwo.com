import com.wgtwo.api.auth.v0.UserTokenServiceGrpc
import com.wgtwo.api.auth.v0.UserTokensProto
import com.wgtwo.api.common.Environment
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import com.wgtwo.api.util.phonenumber.PhoneNumbers

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken(System.getenv("CLIENT_ID"), System.getenv("CLIENT_SECRET"))
private val stub = UserTokenServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

private fun String.toPhoneNumberProto() = PhoneNumbers.toPhoneNumberProto(PhoneNumbers.of(this))

fun main() {
    val request = UserTokensProto.ListUserTokenRequest.newBuilder()
        .setPhoneNumber("+47 xxx xx xxx".toPhoneNumberProto())
        .build()
    val response: UserTokensProto.ListUserTokenResponse = stub.list(request)
    println("User token metadata list: ${response.userTokenMetadataList}")
}
