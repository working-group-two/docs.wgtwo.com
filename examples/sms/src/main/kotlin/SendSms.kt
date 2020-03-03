import com.wgtwo.api.common.Environment
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import io.omnicate.messaging.protobuf.MessageCoreGrpc
import io.omnicate.messaging.protobuf.Messagecore

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken(System.getenv("CLIENT_ID"), System.getenv("CLIENT_SECRET"))
private val stub = MessageCoreGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val message = Messagecore.TextMessage.newBuilder()
        .setFromAddress(
            Messagecore.Address.newBuilder()
                .setNumber("47xxxxxxxx")
                .setType(Messagecore.Address.Type.INTERNATIONAL_NUMBER)
                .build()
        )
        .setToAddress(
            Messagecore.Address.newBuilder()
                .setNumber("47xxxxxxxx")
                .setType(Messagecore.Address.Type.INTERNATIONAL_NUMBER)
                .build()
        )
        .setBody("My SMS content")
        .setDirection(Messagecore.Direction.OUTGOING)
        .build()

    val result = stub.sendTextMessage(message)
    if (result.status == Messagecore.SendAttemptStatus.SEND_OK) {
        println("Successfully sent message")
    } else {
        println("Failud to send message: status=" + result.status)
    }
}
