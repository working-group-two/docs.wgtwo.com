---
title: List applicable rights
topic: usertokens
type: how-to
codeList: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/rights/src/main/kotlin/ListRights.kt
codeCheckExpansion: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/rights/src/main/kotlin/CheckExpansion.kt
---

# List applicable rights

## Overview

To manage user tokens, you will need to:
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)
* Write client code for creating and managing user tokens

## Prerequisites

### Token/credentials
* You will need [credentials from Console](https://console.wgtwo.com/api-keys-redirect).

### Install dependencies
<JitpackDependency />

Then you can add `auth-grpc` and `utils-grpc`:

<ClientDependencies :clients="['auth-grpc', 'utils-grpc']"/>

## List all applicable rights
Returns a list of all applicable rights

<GithubCode :to="$frontmatter.codeList" />

## Check what a right will be expanded to
Returns a list of all the rights the given rights will be expanded to.

<GithubCode :to="$frontmatter.codeCheckExpansion" />

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
