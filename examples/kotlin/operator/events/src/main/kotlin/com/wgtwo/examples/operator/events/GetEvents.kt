package com.wgtwo.examples.operator.events

import com.wgtwo.api.common.Environment
import com.wgtwo.api.events.v0.EventsProto
import com.wgtwo.api.events.v0.EventsServiceGrpc
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken
import io.grpc.stub.StreamObserver

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = EventsServiceGrpc.newStub(channel).withCallCredentials(credentials)

fun main() {
    val request = EventsProto.SubscribeEventsRequest.newBuilder()
        .addType(EventsProto.EventType.VOICE_EVENT)
        .addType(EventsProto.EventType.VOICEMAIL_EVENT)
        .build()
    stub.subscribe(request, object : StreamObserver<EventsProto.SubscribeEventsResponse> {
        override fun onNext(response: EventsProto.SubscribeEventsResponse) {
            println("Received event of type: ${response.event.eventCase}")
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
