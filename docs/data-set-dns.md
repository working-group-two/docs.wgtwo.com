---
title: Set custom DNS
topic: data
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---

# How to set a custom DNS for a data connection

## Overview

This example shows how you can set a custom DNS for a data connection. 
In order to set DNS your credentials need to have the `data.set.dns` right.

You can set primary and secondary IPv4 and/or IPv6 DNS servers. When setting 
you must include at least one primary DNS server.

<DemoConfigurer />

## Set custom DNS

<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/data/set-dns.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/data/set-dns.sh"
  :kotlinDeps="['data-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/data/src/main/kotlin/com/wgtwo/examples/operator/data/SetCustomDns.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/data/src/main/kotlin/com/wgtwo/examples/operator/data/SetCustomDns.kt"
  />

## Get current custom DNS config

<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/data/get-dns.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/data/get-dns.sh"
  :kotlinDeps="['data-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/data/src/main/kotlin/com/wgtwo/examples/operator/data/GetCustomDns.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/data/src/main/kotlin/com/wgtwo/examples/operator/data/GetCustomDns.kt"
/>

## Clear custom DNS config

<CodeSnippet
  grpcurlOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/data/clear-dns.sh"
  grpcurlThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/data/clear-dns.sh"
  :kotlinDeps="['data-grpc', 'utils-grpc']"
  kotlinOperator="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/data/src/main/kotlin/com/wgtwo/examples/operator/data/ClearCustomDns.kt"
  kotlinThirdpartydev="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/data/src/main/kotlin/com/wgtwo/examples/operator/data/ClearCustomDns.kt"
/>

## Concepts
* [wikipedia.org/wiki/Domain_Name_System](https://en.wikipedia.org/wiki/Domain_Name_System)
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
