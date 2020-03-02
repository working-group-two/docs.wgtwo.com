import com.wgtwo.api.common.Environment
import com.wgtwo.api.events.v0.EventsProto
import com.wgtwo.api.events.v0.EventsServiceGrpc
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import io.grpc.stub.StreamObserver
import com.google.protobuf.util.Durations

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")
private val stub = EventsServiceGrpc.newStub(channel).withCallCredentials(credentials)

fun acknowledge(event: EventsProto.Event) {
    val request = EventsProto.AckRequest.newBuilder()
        .setSequence(event.metadata.sequence)
        .setInbox(event.metadata.ackInbox)
        .build()
    stub.ack(request, object : StreamObserver<EventsProto.AckResponse> {
        override fun onNext(response: EventsProto.AckResponse) {
            println("Event successfully acknowledged")
        }

        override fun onError(throwable: Throwable) {
            println("Error acknowledging event")
        }

        override fun onCompleted() {
            println("On completed called")
        }
    })
}

fun main() {
    val request = EventsProto.SubscribeEventsRequest.newBuilder()
        .addType(EventsProto.EventType.VOICE_EVENT)
        .addType(EventsProto.EventType.VOICEMAIL_EVENT)
        .setManualAck(EventsProto.ManualAckConfig.newBuilder()
                .setEnable(true)
                .setTimeout(Durations.fromSeconds(15))
                .build()
        )
        .build()
    stub.subscribe(request, object : StreamObserver<EventsProto.SubscribeEventsResponse> {
        override fun onNext(response: EventsProto.SubscribeEventsResponse) {
            response.eventList.forEach { event ->
                println("Received event of type: ${event.eventCase}")
                acknowledge(event)
            }
        }

        override fun onError(throwable: Throwable) {
            println("Got error: ${throwable.message}")
            // TODO: Reconnect
        }

        override fun onCompleted() {
            println("Connection closed by the server")
        }
    })
}
