---
title: Manage user tokens
topic: usertokens
type: how-to
---

# Manage user tokens

## Overview

This API allows to create user tokens, which can enable accessing our APIs in the context of a user. This can either be
a token that is given directly to the end-user or used by the operator on behalf of their user.
In order to access this API, your credentials need to have the `id.user.token.create` right.

<slot name="auth" />

## grpcurl

### Create new user token
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/auth/v0/usertokens.proto \
  -d '
  {
    "humanName": "My hobby project",
    "correlationId": "my-unique-id",
    "phoneNumbers": [
      { "e164": "+47xxxxxxxx" }
    ],
    "rights": "voicemail.*",
    "tags": {
      "createdBy": "Alice",
      "location": "My Raspberry PI"
    }
  }
  ' \
  api.wgtwo.com:443 \
  wgtwo.auth.v0.UserTokenService.Create
```

### List user tokens for phone number
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/auth/v0/usertokens.proto \
  -d '{ "phoneNumber": { "e164": "+47xxxxxxxx" } }' \
  api.wgtwo.com:443 \
  wgtwo.auth.v0.UserTokenService.List
```

### Get user token
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/auth/v0/usertokens.proto \
  -d '{ "correlationId": "my-unique-id" }' \
  api.wgtwo.com:443 \
  wgtwo.auth.v0.UserTokenService.Get
```

### Revoke user token
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/auth/v0/usertokens.proto \
  -d '{ "correlationId": "my-unique-id" }' \
  api.wgtwo.com:443 \
  wgtwo.auth.v0.UserTokenService.Revoke
```

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `auth-grpc` and `utils-grpc`:

<ClientDependencies :clients="['auth-grpc', 'utils-grpc']"/>

### Create new user token
A user token may consist of multiple phone numbers, rights and tags.

Rights does accept using `*` as wildcard, which will match any suffix.

For a list of applicable rights, see [List applicable rights](../list-applicable-rights/).

<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/CreateUserToken.kt" language="kotlin" />

### List user tokens for phone number
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/ListUserToken.kt" language="kotlin" />

### Get user token
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/GetUserToken.kt" language="kotlin" />

### Revoke user token
<GithubCode fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/RevokeUserToken.kt" language="kotlin" />

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
