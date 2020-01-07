---
title: List and play voicemails
topic: voicemail
type: how-to
---

# List and play voicemails

## Overview

To list and play voicemails you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write code that does the work, targetting a specific phone number on the platform
* Optional: Mark a voicemail as read or delete it

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect) to list voicemails for users on your platform.

### Msisdn on platform to target
* The code assumes you know which phone number (msisdn) you wish to get voicemails from.

### Install dependencies

To add the dependencies, first you need to add the [Jitpack](https://jitpack.io) repository:
```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```

Then you can add `voicemail-grpc` and `common`:

```xml
<dependencies>
    <dependency>
        <groupId>com.github.working-group-two.wgtwoapis</groupId>
        <artifactId>voicemail-grpc</artifactId>
        <version>bc0f39d</version>
    </dependency>
    <dependency>
        <groupId>com.github.working-group-two.wgtwoapis</groupId>
        <artifactId>common</artifactId>
        <version>bc0f39d</version>
    </dependency>
</dependencies>
```

### Initialize your dependencies
```kotlin
import com.wgtwo.api.auth.Clients
import com.wgtwo.api.common.OperatorToken

val channel = Clients.createChannel(Clients.Environment.PROD)
val credentials = OperatorToken("YOUR_CLIENT_ID", "YOUR_CLIENT_SECRET")
val blockingStub = VoicemailMediaServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)
```

## List voicemails
```kotlin
fun listVoicemails(msisdn: String): MutableList<Voicemail.VoicemailMetadata>? {
    val voicemailMetadataRequest = Voicemail.GetAllVoicemailMetadataRequest.newBuilder().setMsisdn(msisdn).build()
    val metadataResponse = try {
        blockingStub.getAllVoicemailMetadata(voicemailMetadataRequest)
    } catch (e: StatusRuntimeException) {
        println(e)
        return null
    }

    val voicemailList = metadataResponse.voicemailsMetadataList
    if (voicemailList.isEmpty()) {
        println("No voicemails for msisdn $msisdn")
    }

    for (voicemailMetadata in voicemailList) {
        println(voicemailMetadata)
    }
    return voicemailList
}
```

## Play voicemail
```kotlin
fun playVoicemail(voicemailId: String) {
    val voicemailRequest = Voicemail.GetVoicemailRequest.newBuilder().setVoicemailId(voicemailId).build()

    val voicemail = try {
        blockingStub.getVoicemail(voicemailRequest)
    } catch (e: StatusRuntimeException) {
        println(e)
        return
    }

    val tempFile = createTempFile(prefix = "voicemail", suffix = ".mp3")
    val outputStream = tempFile.outputStream()
    voicemail.voicemailFile.writeTo(outputStream)
    outputStream.close()

    val audioInputStream = AudioSystem.getAudioInputStream(tempFile)
    val clip = AudioSystem.getClip()
    clip.open(audioInputStream)
    println("Playing voicemail: $voicemailId")
    clip.start()
    Thread.sleep(clip.microsecondLength / 1000)
}
```

## Mark voicemail as read
```kotlin
fun markVoicemailAsRead(voicemailId: String): Boolean {
    val readRequest = Voicemail.MarkVoicemailAsReadRequest.newBuilder().setVoicemailId(voicemailId).build()

    return try {
        blockingStub.markVoicemailAsRead(readRequest)
        true
    } catch (e: StatusRuntimeException) {
        println(e)
        false
    }
}
```

## Delete voicemail
```kotlin
fun deleteVoicemail(voicemailId: String): Boolean {
    val deleteRequest = Voicemail.DeleteVoicemailRequest.newBuilder().setVoicemailId(voicemailId).build()

    return try {
        blockingStub.deleteVoicemail(deleteRequest)
        true
    } catch (e: StatusRuntimeException) {
        println(e)
        false
    }
}
```

## Resources
* [VoicemailDemo.kt](https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/voicemail/VoicemailDemo.kt)
* [voicemail.proto API reference](https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/voicemail/voicemail.proto)

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
