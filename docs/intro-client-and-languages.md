---
title: API structure and libraries
topic: intro
type: reference
typeOrder: 2
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---

# API Structure and Libraries

## gRPC
We use [gRPC](https://www.grpc.io/) as our messaging protocol for all our APIs, except the `Subscription API` and
`Provision API`.

Our `.proto` files can be found at [github.com/working-group-two/wgtwoapis](https://github.com/working-group-two/wgtwoapis)
under the `wgtwo` folder.

## REST-like
The `Subscription API` and `Provision API` has a REST-like API.

Our OpenAPI specification can be found at [github.com/working-group-two/wgtwoapis-openapi](https://github.com/working-group-two/wgtwoapis-openapi)
under the `openapi` folder.

## Libraries

Using our `.proto` files and OpenAPI specification, you may generate code for most languages.

In addition, we offer generated code for Go and Java.

### Go

Add import for the API you would like to use. Path is the same as its `.proto` file:
```go
import (
	wgtwoEvents  "github.com/working-group-two/wgtwoapis/wgtwo/events/v0"
)
```

### Java / Kotlin using Maven
To add the dependencies, first you need to add the https://jitpack.io repository:

<JitpackDependency />

Then you can add the dependencies:
<ClientDependencies :clients="['event-grpc']"/>

The specific package to include is included in the documentation of each API.

The version used is the commit SHA from our [repository](https://github.com/working-group-two/wgtwoapis).

Latest version should match the output of:
```shell
git ls-remote https://github.com/working-group-two/wgtwoapis master | cut -f1
```
