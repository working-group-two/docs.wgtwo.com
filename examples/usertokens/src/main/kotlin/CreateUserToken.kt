import com.wgtwo.api.auth.v0.UserTokenServiceGrpc
import com.wgtwo.api.auth.v0.UserTokensProto
import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = UserTokenServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = UserTokensProto.CreateUserTokenRequest.newBuilder()
        .setHumanName("My hobby project")
        .setCorrelationId("my-unique-id")
        .addPhoneNumbers(
            PhoneNumberProto.PhoneNumber.newBuilder()
                .setE164("+47xxxxxxxx")
                .build()
        )
        .addRights("voicemail.*")
        .putTags("createdBy", "Alice")
        .putTags("location", "My Raspberry PI")
        .build()

    val response: UserTokensProto.CreateUserTokenResponse = stub.create(request)
    println("This actual token is only displayed once: ${response.userToken}")
}
