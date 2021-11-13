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
    val message = with(DataProto.SetCustomDnsRequest.newBuilder()) {
        this.subscriber = with(PhoneNumberProto.PhoneNumber.newBuilder()) {
            this.e164 = "+4672xxxxxxx"
            build()
        }
        this.dnsV4 = with(DataProto.IpV4Pair.newBuilder()) {
            primary = with(DataProto.IpAddressV4.newBuilder()) {
                ipv4 = "1.1.1.1"
                build()
            }
            secondary = with(DataProto.IpAddressV4.newBuilder()) {
                ipv4 = "1.0.0.1"
                build()
            }
            build()
        }
        this.dnsV6 = with(DataProto.IpV6Pair.newBuilder()) {
            primary = with(DataProto.IpAddressV6.newBuilder()) {
                ipv6 = "2606:4700:4700::1111"
                build()
            }
            secondary = with(DataProto.IpAddressV6.newBuilder()) {
                ipv6 = "2606:4700:4700::1001"
                build()
            }
            build()
        }
        build()
    }

    val result = stub.setCustomDns(message)
    if (result.status == DataProto.CustomDnsResponse.Status.ACCEPTED) {
        println("Successfully set DNS config")
    } else {
        println("""
            Failure to set DNS config:
            status=${result.status}
            description=${result.errorMessage}"
        """.trimIndent())
    }
}
