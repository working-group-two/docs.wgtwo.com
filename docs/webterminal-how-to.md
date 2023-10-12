---
title: Create a Web Terminal to make and receive calls
topic: web terminal
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
sourceExamples:
  - examples/kotlin/thirdpartydev/webterminal/src/main/kotlin/com/wgtwo/examples/thirdpartydev/webterminal/InitiateCall.kt
  - examples/grpcurl/thirdpartydev/webterminal/initiatecall.sh
---

# Make and receive WebRTC calls

## Prerequisites
1. [An OAuth 2.0 client](/oauth-2-0/create-o-auth-2-0-client/)
2. [An access token](/oauth-2-0/get-client-access-token)

## Overview
This API makes it possible to register a WebRTC terminal (or just Terminal) with our (voice) core, and then use it to make and receive calls just like a mobile phone does.

In other words, the API enables development of a software phone fully integrated with our core.

To access this API, your credentials must include `call.control.answer_and_initiate` scope.

## The API

The API is implemented as a gRPC service exchanging a specific set of Protocol Buffer messages with your Terminal.

To register your Terminal with our core, you can use one of the two methods:
- `Pipe()`
- `MultiPipe()`

Both methods serve the same purpose, but there is also a difference.
- If you want to handle multiple ongoing calls simultaneously, use `MultiPipe()`
- For a single call at a time, use `Pipe()`

Both methods receive and/or return a stream of `WebTerminalMessage`s (two-way streaming).

A `WebTerminalMessage` is a structure used to exchange messages between a Terminal and our core (see [proto](/web-terminal/web-terminal-api-reference/)).

For example, if you:

1. register your Terminal (by calling either `Pipe` or `MultiPipe`)
2. initiate a call by pushing a `WebTerminalMessage` that contains an `Offer` to our core
3. receive a `WebTerminalMessage` from our core containing `Ringing` followed by an `Answer`

then

4. your Terminal will know that the callee's phone¹ was first ringing, and then the callee answered the call.

> ¹ or another Terminal

In this manner, you are able to build quite a sophisticated application with the help of this API.

### Example code

The examples below merely demonstrate how to consume this API without prying into the logic of your application.

In other words, they demonstrate how to
- create a Terminal
- push an `Offer` to the core
- receive messages from the core

For Java example, click [here](https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/webterminal/src/main/kotlin/com/wgtwo/examples/thirdpartydev/webterminal/InitiateCall.java).

<CodeSnippet
:grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/webterminal/initiatecall.sh']"
:kotlin="$sourceExamplesMap['examples/kotlin/thirdpartydev/webterminal/src/main/kotlin/com/wgtwo/examples/thirdpartydev/webterminal/InitiateCall.kt']"
/>

### Common scenarios

> Depending on the method used to register a WebRTC terminal, **call_id** in the scenarios below is either ignored (`Pipe`) or mandatory (`MultiPipe`).

> **call_id** is basically a random UUID either created by Terminal or by the core.

#### Initiating a call from a WebRTC terminal

| # | ↔ | Note |
| :--- | :--- | :--- |
|1|T → `{Offer{sdp, msisdn}, call_id}`|Terminal sends an `Offer` with an SDP, a new UUID as **call_id** and the **msisdn** of the callee|
|2|T ← `{Answer{sdp}, call_id}` **OR** `{Bye{}, call_id}`|Terminal receives either an Answer with an SDP enclosed, or a `Bye` rejecting the call|
|3|T ↔︎ `{Bye{}, call_id}`|If established, the call eventually gets terminated with a `Bye` from either party|

#### Receiving an incoming call from the core

| # | ↔ | Note |
| :--- | :--- | :--- |
|1|T ← `{Offer{sdp, msisdn}, call_id}`|Terminal receives an `Offer` with an SDP, a new UUID as **call_id** and the **msisdn** of the caller|
|2|T → `{Ringing{}, call_id}`|(optional) Terminal tells the core that it is alerting the user|
|3|T → `{Answer{sdp}, call_id}` **OR** `{Bye{}, call_id}`|Terminal sends either an Answer with an SDP enclosed, or a `Bye` rejecting the call|
|4|T ↔︎ `{Bye{}, call_id}`|If established, the call eventually gets terminated with a `Bye` from either party|

#### Observing status
| # | ↔ | Note |
| :--- | :--- | :--- |
|1|T ← `{InCall{msisdn}, call_id}`|Terminal receives an `InCall` notification whenever its **msisdn** becomes a participant of a call on another terminal|
|2|T ← `{Idle{msisdn}, call_id}`|Terminal receives `Idle` whenever its **msisdn** becomes a non-participant of any call|

> `Pipe()`: **call_id** in Idle is empty as these messages are about the associated **msisdn**.  

> `MultiPipe()`: **call_id** indicates the call in question, for your Terminal to know which particular call has started/ended

#### Transferring call to Terminal

Upon reception of an `InCall` notification, Terminal can transfer the call to itself by sending a new `Offer` to the core

| # | ↔ | Note |
| :--- | :--- | :--- |
|1|T → `{Offer{sdp, msisdn}, call_id}`|**call_id** must be the one from the `InCall` received|
|2|T ← `{Answer{sdp}, call_id}` **OR** `{Bye{}, call_id}`|Terminal receives either an Answer with an SDP enclosed, or a `Bye` rejecting the call|
|3|T ↔︎ `{Bye{}, call_id}`|If established, the call eventually gets terminated with a `Bye` from either party|

#### Transferring call to the mobile terminal

Whenever in a call, Terminal can transfer it to the associated mobile phone by sending `{Action{ToPhone{}}` message to the core.

| # | ↔ | Note |
| :--- | :--- | :--- |
|1|T → `{Action{ToPhone{}}, call_id}`|Requesting transfer to the phone (**call_id** must be the id of the call ongoing)|
|2|T ← `{InCall{msisdn}, call_id}`|Indicates that the call has been transfered to the phone|
|3|T ↔︎ `{Idle{msisdn}, call_id}`|Indicates that the call has ended|

#### ICE

Terminal may send its candidates to the core within an SDP of Offer or Answer. WG2 media servers are on public
Internet and will report its candidates in SDP.

#### Renegotiating SDP

During an ongoing call, Terminal must be prepared to receive (and handle) `Offer` with a new SDP even though the `Offer`/`Answer` exchange has completed.

| # | ↔ | Note |
| :--- | :--- | :--- |
|1|T ← `{Offer{sdp, msisdn}, call_id}`|The core uses `Offer` to update SDP|


## Concepts
* [WebRTC basics](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
* [gRPC concepts](https://grpc.io/docs/guides/concepts/)
* [Kotlin gRPC tutorial](https://grpc.io/docs/languages/kotlin/basics/)
* [Java gRPC stubs](https://grpc.io/docs/reference/java/generated-code/)
