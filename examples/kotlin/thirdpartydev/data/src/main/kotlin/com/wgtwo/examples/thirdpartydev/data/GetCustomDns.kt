package com.wgtwo.examples.operator.data

import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.data.v0.DataProto
import com.wgtwo.api.data.v0.DataServiceGrpc
import com.wgtwo.api.util.auth.Clients
import com.wgtwo.api.util.auth.AccessToken

private val channel = Clients.createChannel(Environment.PROD)
private val credentials = AccessToken("ACCESS_TOKEN") // Add your credentials
private val stub = DataServiceGrpc.newBlockingStub(channel).withCallCredentials(credentials)

fun main() {
    val message = with(DataProto.GetCustomDnsRequest.newBuilder()) {
        this.subscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = "+4672xxxxxxx"
            build()
        }
        build()
    }

    val result = stub.getCustomDns(message)
    println("""
        Got DNS config:
        IpV4 primary=${result.dnsV4.primary.ipv4}
        IpV4 secondary=${result.dnsV4.secondary.ipv4}
        IpV6 primary=${result.dnsV6.primary.ipv6}
        IpV6 secondary=${result.dnsV6.secondary.ipv6}
    """.trimIndent())
}
