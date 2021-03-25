package com.wgtwo.examples.operator.right

import com.wgtwo.api.auth.v0.RightServiceGrpc
import com.wgtwo.api.auth.v0.RightsProto
import com.wgtwo.api.common.Environment
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken("CLIENT_ID", "CLIENT_SECRET")
private val stub = RightServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = RightsProto.ListRightsRequest.newBuilder().build()
    val response = stub.list(request)
    val rights: List<String> = response.rightsList
    println("Rights: $rights")
}
