---
title: Receive SMS
topic: sms
type: how-to
typeOrder: 2
---

# How to receive SMS

## Overview

To receive an SMS you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write code that starts listening for incoming SMS
* Ack each received SMS

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect) to send SMS to/for users on your platform.

### Install dependencies
<JitpackDependency />

Then you can add `messaging-grpc` and `common`:

<ClientDependencies :clients="['messaging-grpc', 'common']"/>

### Initialize your dependencies
```kotlin
import com.wgtwo.api.auth.Clients
import com.wgtwo.api.common.OperatorToken

val channel = Clients.createChannel(Clients.Environment.PROD)
val credentials = OperatorToken("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")
val messageCoreStub = MessageCoreGrpc
        .newStub(channel)
        .withCallCredentials(credentials)
        .withWaitForReady()
```

## Receive SMS
```kotlin
import com.wgtwo.example.Shared
import io.grpc.Context
import io.grpc.Status
import io.grpc.StatusException
import io.grpc.StatusRuntimeException
import io.grpc.stub.StreamObserver
import io.omnicate.messaging.protobuf.MessageCoreGrpc
import io.omnicate.messaging.protobuf.Messagecore
import org.slf4j.LoggerFactory
import java.time.Duration
import java.util.concurrent.Executors
import java.util.concurrent.ScheduledExecutorService
import java.util.concurrent.TimeUnit

interface SmsReceiver {
    fun onReceived(sms: Messagecore.Message)
}

// Your SMS observer that holds business logic
object MySmsReceiver : SmsReceiver {

    init {
        // Add your object to the service to be notified of new SMS
        ReceiveSmsService.smsReceivedObservers.add(this)
    }

    override fun onReceived(sms: Messagecore.Message) {
        // do something with the sms
    }
}

// Example service which handles receiving SMS and notifies all observers, like MySmsReceiver
object ReceiveSmsService {
    private val logger = LoggerFactory.getLogger(javaClass)
    private val executor: ScheduledExecutorService = Executors.newSingleThreadScheduledExecutor()
    private val context: Context.CancellableContext = Context.current().withCancellation()

    private val channel = Clients.createChannel(Clients.Environment.PROD)
    private val credentials = OperatorToken("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")
    private val messageCoreStub = MessageCoreGrpc
        .newStub(Shared.channel)
        .withCallCredentials(Shared.credentials)
        .withWaitForReady()

    val smsReceivedObservers = mutableSetOf<SmsReceiver>()

    init {
        executor.submit { listenForSms() }
    }

    fun listenForSms() {
        logger.info("Starting to listen for SMS")
        context.run {
            // call GRPC method receiveMessages and register ReceiveMessagesObserver
            messageCoreStub.receiveMessages(
                Messagecore.ReceiveMessagesRequest.getDefaultInstance(),
                ReceiveMessagesObserver
            )
        }
    }

    fun close() {
        executor.shutdown()
        context.cancel(null)
        executor.awaitTermination(1, TimeUnit.SECONDS)
    }

    private object ReceiveMessagesObserver : StreamObserver<Messagecore.MessageBox> {

        // Handle new messages
        override fun onNext(messageBox: Messagecore.MessageBox) {
            logger.info("Received messageBox with ${messageBox.messagesList.size} messages")
            messageBox.messagesList.forEach { message ->

                // Each message needs to be acked or it will be resent
                SmsReceivedAcker.ackMessage(message)
                smsReceivedObservers.parallelStream().forEach {
                    it.onReceived(message)
                }
            }
        }

        // Disconnects can happen and need to be handled
        override fun onError(t: Throwable) {
            logger.warn("${t.message}")

            val status = getStatus(t)
            if (status != Status.UNAVAILABLE) {
                logger.info("Sleeping for 1s...")
                restart(wait = Duration.ofSeconds(1))
            } else {
                restart()
            }
        }

        fun getStatus(throwable: Throwable): Status? = when (throwable) {
            is StatusRuntimeException -> throwable.status
            is StatusException -> throwable.status
            else -> null
        }

        // Stream can also be closed without error, and in this scenario you should also reconnect
        override fun onCompleted() {
            logger.info("onCompleted called")
            restart()
        }

        private fun restart(wait: Duration = Duration.ZERO) {
            // check that the operation hasn't been cancelled, e.g. by the server shutting down
            if (!context.isCancelled) {
                executor.schedule({ listenForSms() }, wait.toMillis(), TimeUnit.MILLISECONDS)
            }
        }
    }


    private object SmsReceivedAcker {
        fun ackMessage(it: Messagecore.Message) {
            val ackMessageRequest = Messagecore.AckMessageRequest.newBuilder()
                .setAckStatus(
                    Messagecore.ReceiveStatus.newBuilder()
                        .setMessageId(it.messageId)
                        .setStatus(Messagecore.ReceiveAttemptStatus.RECEIVE_OK)
                        .build()
                )
                .build()
            messageCoreStub.ackMessage(ackMessageRequest, AckMessageObserver)
        }
    }

    object AckMessageObserver : StreamObserver<Messagecore.AckMessageResponse> {
        override fun onNext(value: Messagecore.AckMessageResponse) {}

        override fun onError(t: Throwable) {
            logger.warn("${t.message}")
        }

        override fun onCompleted() {
            logger.debug("Completed ack")
        }
    }
}
```

## Resources
* [ReceiveSmsServiceExample.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/receivesms/ReceiveSmsServiceExample.kt)
* [Messagecore API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/messaging/messagecore.proto)

## Concepts
* [wikipedia.org/wiki/SMS](https://en.wikipedia.org/wiki/SMS)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
