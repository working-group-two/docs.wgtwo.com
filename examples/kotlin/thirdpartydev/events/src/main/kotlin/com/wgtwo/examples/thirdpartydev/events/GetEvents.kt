package com.wgtwo.examples.thirdpartydev.events

import com.wgtwo.api.common.Environment
import com.wgtwo.api.v0.events.EventsProto
import com.wgtwo.api.v0.events.EventsServiceGrpc
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.BearerToken
import io.grpc.stub.StreamObserver

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val credentials = BearerToken { "MY_ACCESS_TOKEN" } // Add your _client credentials_ access token (not user access token)
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
