---
title: Manage user tokens
topic: usertokens
type: how-to
codeCreate: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/CreateUserToken.kt
codeList: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/ListUserToken.kt
codeGet: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/GetUserToken.kt
codeRevoke: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/RevokeUserToken.kt
---

# Manage user tokens

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

## Create new user token
A user token may consist of multiple phone numbers, rights and tags.

Rights does accept using `*` as wildcard, which will match any suffix.

For a list of applicable rights, see [List applicable rights](../list-applicable-rights/).

<GithubCode :to="$frontmatter.codeCreate" />

## List user tokens for phone number
<GithubCode :to="$frontmatter.codeList" />

## Get user token
<GithubCode :to="$frontmatter.codeGet" />

## Revoke user token
<GithubCode :to="$frontmatter.codeRevoke" />

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
