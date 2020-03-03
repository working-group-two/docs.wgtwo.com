---
title: Listen for events
topic: events
type: how-to
externalLinkEvents: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/events/src/main/kotlin/com/wgtwo/examples/events/GetEvents.kt
externalLinkEventsManualAcks: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/events/src/main/kotlin/com/wgtwo/examples/events/GetEventsManualAck.kt
---

# How to listen for Events

## Overview

To listen for events, you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write client code that connects to our message broker

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect) for the type of event you're interested in.
  You will only receive an event if your token has the appropriate right.

### Install dependencies
<JitpackDependency />

Then you can add `event-grpc` and `common`: 

<ClientDependencies :clients="['events-grpc', 'common']"/>

## Listen for events
<GithubCode :to="$frontmatter.externalLinkEvents" />

## Manual acknowledge
In the below example we enable manual acknowledgement, and setting a custom ack timeout.

Include Google's Protocol Buffers utility library for support of Google's Well-Known Types:
<ClientDependencies :clients="['protobuf-java-util']"/>

<GithubCode :to="$frontmatter.externalLinkEventsManualAcks" />

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
