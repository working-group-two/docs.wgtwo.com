package com.wgtwo.examples.thirdpartydev.events

import com.wgtwo.api.common.Environment
import com.wgtwo.api.v0.events.EventsProto
import com.wgtwo.api.v0.events.EventsServiceGrpc
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.BearerToken
import io.grpc.stub.StreamObserver
import com.google.protobuf.util.Durations

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val credentials = BearerToken { "MY_ACCESS_TOKEN" } // Add your _client credentials_ access token (not user access token)
private val stub = EventsServiceGrpc.newStub(channel).withCallCredentials(credentials)

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
            println("Received event of type: ${response.event.eventCase}")
            acknowledge(response.event)
        }

        override fun onError(throwable: Throwable) {
            println("Got error: ${throwable.message}")
            // TODO: Reconnect
        }

        override fun onCompleted() {
            println("Connection closed by the server")
        }
    })
    // Wait for stream to close
    try { Thread.currentThread().join() } catch (e: InterruptedException) {}
}

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
            println("Error acknowledging event: ${throwable.message}")
        }

        override fun onCompleted() {}
    })
}
