package com.wgtwo.examples.thirdpartydev.data

import com.wgtwo.api.common.Environment
import com.wgtwo.api.common.v0.PhoneNumberProto
import com.wgtwo.api.data.v0.DataProto
import com.wgtwo.api.data.v0.DataServiceGrpc
import com.wgtwo.api.util.auth.Channels
import com.wgtwo.api.util.auth.BearerToken

private val channel = Channels.createChannel(Environment.PRODUCTION)
private val credentials = BearerToken { "MY_ACCESS_TOKEN" } // Add your credentials
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
