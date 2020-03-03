package com.wgtwo.examples.rights

import com.wgtwo.api.auth.v0.RightServiceGrpc
import com.wgtwo.api.auth.v0.RightsProto
import com.wgtwo.api.common.Environment
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken(System.getenv("CLIENT_ID"), System.getenv("CLIENT_SECRET"))
private val stub = RightServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = RightsProto.CheckExpansionRequest.newBuilder()
        .addRights("voicemail.*")
        .addRights("sms.*")
        .build()
    val response = stub.checkExpansion(request)
    val rights: List<String> = response.rightsList
    println("Rights: $rights")
}
