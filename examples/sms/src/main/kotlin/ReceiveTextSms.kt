import com.wgtwo.api.common.Environment
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import io.grpc.stub.StreamObserver
import io.omnicate.messaging.protobuf.MessageCoreGrpc
import io.omnicate.messaging.protobuf.Messagecore

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = MessageCoreGrpc.newStub(channel).withCallCredentials(credentials)

fun main() {
    val request = Messagecore.ReceiveTextMessagesRequest.getDefaultInstance()
    stub.receiveTextMessages(request, object : StreamObserver<Messagecore.TextMessageBox> {
        override fun onNext(textMessageBox: Messagecore.TextMessageBox) {
            textMessageBox.textMessagesList.forEach { message ->
                println("Got message: ${message.fromAddress.number} -> ${message.toAddress.number}")
                acknowledge(message.messageId)
            }
        }

        override fun onError(throwable: Throwable) {
            println("Error receiving SMS: ${throwable.message}")
        }

        override fun onCompleted() {
            println("On completed called")
        }
    })
    // Wait for stream to close
    try { Thread.currentThread().join() } catch (e: InterruptedException) {}
}

fun acknowledge(messageId: Long) {
    val request = Messagecore.AckMessageRequest.newBuilder()
        .setAckStatus(
            Messagecore.ReceiveStatus.newBuilder()
                .setMessageId(messageId)
                .setStatus(Messagecore.ReceiveAttemptStatus.RECEIVE_OK)
                .build()
        )
        .build()
    stub.ackMessage(request, object : StreamObserver<Messagecore.AckMessageResponse> {
        override fun onNext(response: Messagecore.AckMessageResponse) {
            println("SMS successfully acknowledged")
        }

        override fun onError(throwable: Throwable) {
            println("Error acknowledging SMS: ${throwable.message}")
        }

        override fun onCompleted() {}
    })
}
