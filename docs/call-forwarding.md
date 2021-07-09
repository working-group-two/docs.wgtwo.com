---
title: Set call forwarding
topic: call forwarding
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
sourceExamples:
  - examples/grpcurl/thirdpartydev/forwarding/unconditional_to_number.sh
  - examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/UnconditionalCallForwardingToNumber.kt
  - examples/grpcurl/thirdpartydev/forwarding/conditional_to_number.sh
  - examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/ConditionalCallForwardingToNumber.kt
  - examples/grpcurl/thirdpartydev/forwarding/unconditional_to_trunk.sh
  - examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/UnconditionalCallForwardingToTrunk.kt
  - examples/grpcurl/thirdpartydev/forwarding/conditional_to_voicemail.sh
  - examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/ConditionalCallForwardingToVoicemail.kt
  - examples/grpcurl/thirdpartydev/forwarding/disable.sh
  - examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/DisableCallForwarding.kt
---

# How to set up call forwarding

## Overview
This example shows you how to forward calls to other numbers or services. In order to forward calls
your credentials need to have one or more of `callforwarding.disable`, `callforwarding.to_voicemail`,
`callforwarding.to_number` rights.

For call forwarding to a number or a trunk, you can either forward all calls, unconditional
forwarding, or you can forward if `busy`, `unanswered` and/or `unavailable`.

Forwarding to voicemail can be done to the default voicemail service, or a custom service.

## Limitations
* Call forwarding is not available to special/premium/international numbers.
* Forwarding to trunk is only available if you have a trunk set up for you. Please get in touch with
  [products@wgtwo.com](mailto:products@wgtwo.com?subject=%5BAPI%5D%20Trunk%20Forwarding) if you want
  to discuss this option.
* Forwarding to non-default voicemail services is only available with prior approval. Please get in
  touch with [products@wgtwo.com](mailto:products@wgtwo.com?subject=%5BAPI%5D%20Voicemail)
  if you want to discuss this option.



## Forward all calls (unconditional) to another number

<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/forwarding/unconditional_to_number.sh']"
  :kotlinDeps="['data-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/UnconditionalCallForwardingToNumber.kt']"
  />


## Forward calls if busy or unavailable (conditional) to another number

<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/forwarding/conditional_to_number.sh']"
  :kotlinDeps="['data-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/ConditionalCallForwardingToNumber.kt']"
  />


## Forward all calls (unconditional) to a trunk

<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/forwarding/unconditional_to_trunk.sh']"
  :kotlinDeps="['data-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/UnconditionalCallForwardingToTrunk.kt']"
  />


## Forward calls if busy or unavailable or no answer (conditional) to default voicemail

<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/forwarding/conditional_to_voicemail.sh']"
  :kotlinDeps="['data-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/ConditionalCallForwardingToVoicemail.kt']"
  />


## Disable call forwarding

<CodeSnippet
  :grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/forwarding/disable.sh']"
  :kotlinDeps="['data-grpc', 'utils-grpc']"
  :kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/DisableCallForwarding.kt']"
  />

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
