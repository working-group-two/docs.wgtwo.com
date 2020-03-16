import com.google.protobuf.ByteString
import com.wgtwo.api.common.Environment
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import io.omnicate.messaging.protobuf.MessageCoreGrpc
import io.omnicate.messaging.protobuf.Messagecore
import java.time.Instant

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = MessageCoreGrpc.newBlockingStub(channel).withCallCredentials(credentials)

private fun hexStringToByteArray(s: String): ByteArray {
    val len = s.length
    val data = ByteArray(len / 2)
    var i = 0
    while (i < len) {
        data[i / 2] = ((Character.digit(s[i], 16) shl 4) + Character.digit(s[i + 1], 16)).toByte()
        i += 2
    }
    return data
}

fun main() {
    val from = Messagecore.Address.newBuilder()
        .setNumber("TEST")
        .setType(Messagecore.Address.Type.TEXT)
        .build()
    val to = Messagecore.Address.newBuilder()
        .setNumber("47xxxxxxxx")
        .setType(Messagecore.Address.Type.INTERNATIONAL_NUMBER)
        .build()
    val binaryContent = ByteString.copyFrom(hexStringToByteArray("FFFF0000FFFF0000"))
    val messageClass = Messagecore.SmsFragmentedContent.MessageClass.CLASS3
    val direction = Messagecore.Direction.INCOMING
    val message = with(Messagecore.Message.newBuilder()) {
        this.fromAddress = from
        this.toAddress = to
        this.fragments = with(Messagecore.SmsFragmentedContent.newBuilder()) {
            this.messageClass = messageClass
            this.of = 1
            addFragments(
                with(Messagecore.SmsFragment.newBuilder()) {
                    this.part = 1
                    this.content = binaryContent
                    this.encoding = Messagecore.Charset.GSM8
                    build()
                }
            )
            build()
        }
        this.direction = direction
        this.expires = Instant.now().plusSeconds(60 * 20).toEpochMilli()
        build()
    }

    val result = stub.sendMessage(message)
    if (result.status == Messagecore.SendAttemptStatus.SEND_OK) {
        println("Successfully sent message")
    } else {
        println("Failud to send message: status=" + result.status)
    }
}
