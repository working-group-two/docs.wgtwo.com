import com.google.protobuf.ByteString
import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.mms.v0.MmsProto
import com.wgtwo.api.mms.v0.MmsServiceGrpc
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET") // Add your credentials
private val phoneNumber = "+47xxxxxxxx" // Target your desired user

private val channel = Clients.createChannel(Environment.PROD)
private val stub = MmsServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val message = with(MmsProto.SendAudioToSubscriberRequest.newBuilder()) {
        this.audioContent = with(MmsProto.AudioContent.newBuilder()) {
            this.wav = ByteString.readFrom(
                    this::class.java.classLoader.getResource("test.wav")
                        .openStream()
                )
            build()
        }
        this.fromTextAddress = with(PhoneNumberProto.TextAddress.newBuilder()) {
            this.textAddress = "Test"
            build()
        }
        this.toSubscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = phoneNumber
            build()
        }
        build()
    }

    val result = stub.sendAudioToSubscriber(message)
    if (result.status == MmsProto.SendResponse.SendStatus.SEND_OK) {
        println("Successfully sent message.")
    } else {
        println(
            """
            Failure to send message:
            request ID= ${result.requestId}
            status=${result.status}
            description=${result.description}"
        """.trimIndent()
        )
    }
}