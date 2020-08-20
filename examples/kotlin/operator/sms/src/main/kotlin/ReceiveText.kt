import com.wgtwo.api.common.Environment
import com.wgtwo.api.sms.v0.SmsProto
import com.wgtwo.api.sms.v0.SmsServiceGrpc
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import io.grpc.stub.StreamObserver

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = SmsServiceGrpc.newStub(channel).withCallCredentials(credentials)

fun main() {
    val request = SmsProto.ReceiveTextRequest.getDefaultInstance()
    stub.receiveText(request, object : StreamObserver<SmsProto.Text> {
        override fun onNext(text: SmsProto.Text) {
            println("Got message: ${text.getFromAddressAsString()} -> ${text.getToAddressAsString()}")
            acknowledge(text.id)
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

fun acknowledge(textId: String) {
    val request = with(SmsProto.AckRequest.newBuilder()) {
        this.id = textId
        this.status = SmsProto.AckRequest.ReceiveStatus.RECEIVE_OK
        build()
    }
    stub.ack(request, object : StreamObserver<SmsProto.AckResponse> {
        override fun onNext(response: SmsProto.AckResponse) {
            if (response.ackResponseStatus == SmsProto.AckResponse.AckResponseStatus.ACK_ACCEPTED) {
                println("SMS successfully acknowledged")
            } else {
                println("""
                    Failed to ack SMS.
                    Status: ${response.ackResponseStatus}
                    Error message: ${response.errorMessage}
                """.trimIndent())
            }
        }

        override fun onError(throwable: Throwable) {
            println("Error acknowledging SMS: ${throwable.message}")
        }

        override fun onCompleted() {}
    })
}

fun SmsProto.Text.getFromAddressAsString(): String? =
    when(this.fromAddressCase) {
        SmsProto.Text.FromAddressCase.FROM_NATIONAL_PHONE_NUMBER ->
            this.fromNationalPhoneNumber.nationalPhoneNumber
        SmsProto.Text.FromAddressCase.FROM_E164 ->
            this.fromE164.e164
        SmsProto.Text.FromAddressCase.FROM_TEXT_ADDRESS ->
            this.fromTextAddress.textAddress
        else ->
            null
    }

fun SmsProto.Text.getToAddressAsString(): String? =
    when(this.toAddressCase) {
        SmsProto.Text.ToAddressCase.TO_E164 ->
            this.toE164.e164
        SmsProto.Text.ToAddressCase.TO_NATIONAL_PHONE_NUMBER ->
            this.toNationalPhoneNumber.nationalPhoneNumber
        else ->
            null
    }
