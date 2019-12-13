# List and play voicemails

## Overview

To list and play voicemails you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write code that does the work, targetting a specific phone number on the platform
* Optional: Mark voicemails as read or delete it

## Prerequisites

### Token/Credentials
* You will need [Credentials from Console](https://console.wgtwo.com/api-keys-redirect) to list voicemails for users on your platform.
* Or you will have to get a personal token for just your subscription, if your operator provides this.

### Msisdn on platform to target
* The code assumes you know which phone number (msisdn) you wish to get voicemails from.

### Install dependencies

Add the dependency to your `pom.xml`:
```xml
<dependency>
    <groupId>com.wgtwo.api</groupId>
    <artifactId>TODO</artifactId>
    <version>TODO</version>
</dependency>
```

### Initialize your dependencies
```kotlin
val channel = ManagedChannelBuilder.forAddress("api.wgtwo.com", 443).build()
val credentials = BasicAuth("2c4kb1...", "vas7vb...")
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

    val tempFile = createTempFile(directory = File("/tmp/"), prefix = "voicemail", suffix = ".mp3")
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
* [link to wgtwo-kotlin example repo (doesn't exist yet)](https://github.com/omnicate/wgtwo-kotlin-code-snippets) [inspired by https://github.com/Nexmo/nexmo-java-code-snippets] TODO
* [voicemail.proto API reference](https://github.com/omnicate/wgtwoapis/blob/master/wgtwo/voicemail/voicemail.proto)

## Concepts
* [wikipedia.org/wiki/Voicemail](https://en.wikipedia.org/wiki/Voicemail)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
