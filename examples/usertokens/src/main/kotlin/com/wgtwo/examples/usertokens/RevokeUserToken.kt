package com.wgtwo.examples.usertokens

import com.wgtwo.api.auth.v0.UserTokenServiceGrpc
import com.wgtwo.api.auth.v0.UserTokensProto
import com.wgtwo.api.common.Environment
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.OperatorToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = OperatorToken(System.getenv("CLIENT_ID"), System.getenv("CLIENT_SECRET"))
private val stub = UserTokenServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val request = UserTokensProto.RevokeUserTokenRequest.newBuilder()
        .setCorrelationId("my-unique-id")
        .build()
    stub.revoke(request)
}
