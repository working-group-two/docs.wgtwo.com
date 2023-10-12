---
title: PBX/TAS integration
topic: pbx
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
sourceExamples:
  - examples/kotlin/thirdpartydev/sipbreakout/src/main/kotlin/com/wgtwo/examples/thirdpartydev/sipbreakout/sipbreakout.kt
  - examples/grpcurl/thirdpartydev/sipbreakout/register.sh
---

# Plug your SIP-enabled PBX or TAS into the call path

## Prerequisites
1. [An OAuth 2.0 client](/oauth-2-0/create-o-auth-2-0-client/)
2. [An access token](/oauth-2-0/get-client-access-token)

## Overview
This API enables PBX/TAS (Private Branch Exchange/Telephony Application Server) providers to plug their (SIP-enabled)
endpoint into the call path.

It enables a SIP integration between Working Group Two's core and a PBX/TAS for a given MSISDN.

Virtual SIP Registrations are used to alter default call behavior and involve PBX/TAS into the SIP signaling path.
The registration created per single MSISDN linked to the OAuth 2.0 round trip.

This API requires that you use the OAuth 2.0 Authorization Code Flow flow as shown in our [docs](/oauth-2-0/get-user-access-token/).

To access this API, your credentials must include `call.control.answer_and_initiate scope`.

## The API

The API is implemented as a gRPC service described below.

There are two methods supported by this API:
- `UpsertRegistration`
- `DeleteRegistration`

To register a (PBX/TAS-bound) MSISDN with our core, use `UpsertRegistration`.
The same method is used if you want to update an existing registration.

Use `DeleteRegistration` when an existing registration is no longer needed.

### Messages

Both methods receive `RegistrationRequest` and return `RegistrationResponse` message.

- `RegistrationRequest` is a structure containing the URI of the endpoint you host + some additional details related to the connected MSISDN.
- `RegistrationResponse` is a simple structure conveying the status of method invocation (success/error)

You may find the proto definition of the service + the definition of the messages exchanged [here](/pbx/api-reference/).

### Registration types

There are three types of registrations: `Fork`, `Loop` and `Fallback`. It is the registration type that decides how the calls will be handled by our core.

#### Fork/Loop

If a registration of one of these types is registered on an MSISDN, all the SIP signalling from/to that MSISDN will be replicated to the endpoint specified in the registration.

<g-image src="@/assets/images/loopfork.png" class="desktop-frame" alt="Loop vs Fork" />

- **Loop**: leg 4 is created only after the call comes back as leg 3

    > Please note that PBX/TAS is not obliged to create leg 3 as it can answer or reject leg 2 directly.

- **Fork**: legs 2 and 3 are created simultaneously.

    > Typically, you use `Fork/Loop` to implement your logic during a call.

#### Fallback

The core will action upon a `Fallback` registration if and only if:
- somebody calls the related MSISDN
- the MSISDN is either busy or no answer detected within the timeout (30s)  

In such case, the core will replicate the INVITE to the endpoint specified during the registration.

> Typically, you use `Fallback` to implement the likes of voice mail, call forwarding etc.  

### Example code

The examples below demonstrate how to consume this API.

For Java example, click [here](https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/sipbreakout/src/main/kotlin/com/wgtwo/examples/thirdpartydev/sipbreakout/SipBreakout.java).

<CodeSnippet
:grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/sipbreakout/register.sh']"
:kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/sipbreakout/src/main/kotlin/com/wgtwo/examples/thirdpartydev/sipbreakout/sipbreakout.kt']"
/>

## Concepts
* [WebRTC basics](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
* [gRPC concepts](https://grpc.io/docs/guides/concepts/)
* [Kotlin gRPC tutorial](https://grpc.io/docs/languages/kotlin/basics/)
* [Java gRPC stubs](https://grpc.io/docs/reference/java/generated-code/)
