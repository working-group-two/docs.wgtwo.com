package com.wgtwo.examples.thirdpartydev.numberlookup

import com.google.protobuf.util.Durations
import com.wgtwo.api.v0.lookup.NumberLookupProto.NumberLookupRequest
import com.wgtwo.api.v0.lookup.NumberLookupProto.NumberLookupResponse
import com.wgtwo.api.v0.lookup.NumberLookupServiceGrpcKt
import com.wgtwo.api.v0.lookup.cacheControl
import com.wgtwo.api.v0.lookup.numberLookupResponse
import com.wgtwo.api.v0.lookup.result
import com.wgtwo.auth.BearerTokenCallCredentials
import io.grpc.ManagedChannelBuilder
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.flow.onStart
import kotlinx.coroutines.runBlocking
import java.util.concurrent.TimeUnit
import kotlin.time.Duration.Companion.seconds

private val grpcChannel = ManagedChannelBuilder.forTarget("api.wgtwo.com:443")
    .keepAliveWithoutCalls(true)
    .keepAliveTime(1, TimeUnit.MINUTES)
    .keepAliveTimeout(10, TimeUnit.SECONDS)
    .idleTimeout(1, TimeUnit.HOURS)
    .build()

private val stub = NumberLookupServiceGrpcKt.NumberLookupServiceCoroutineStub(grpcChannel)
    .withCallCredentials(BearerTokenCallCredentials { "MY ACCESS TOKEN" })

val phonebook = mapOf(
    "+4799999999" to "John Doe",
)

suspend fun startStream() {
    val responseQueue = Channel<NumberLookupResponse>()

    // Check queue to see if we have any responses and send them over the wire
    val responseFlow = flow {
        for (response in responseQueue) {
            emit(response)
        }
    }
    stub.numberLookup(responseFlow)
        .onStart { println("Starting new stream") }
        .onEach { request: NumberLookupRequest ->
            println("Got request for ${request.number.e164}")
            val displayName = phonebook.getOrDefault(request.number.e164, "")
            val response = numberLookupResponse {
                numberLookupRequest = request
                result = result {
                    name = displayName
                }
                cacheControl = cacheControl {
                    maxAge = Durations.fromMinutes(60)
                }
            }
            println("Sending response for ${response.numberLookupRequest.number.e164}: ${response.result.name}")
            responseQueue.send(response)
        }
        .catch { e ->
            println("Got error: ${e.message} - Will reconnect in 1s")
            delay(1.seconds)
        }
        .collect()
}

fun main() = runBlocking {
    // Run forever - if the stream fails we will reconnect
    while (true) {
        startStream()
    }
}
