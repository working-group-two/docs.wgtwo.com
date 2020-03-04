---
title: List applicable rights
topic: usertokens
type: how-to
codeList: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/rights/src/main/kotlin/ListRights.kt
codeCheckExpansion: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/rights/src/main/kotlin/CheckExpansion.kt
---

# List applicable rights

## Overview

This API allows you to list which rights a user token can be assigned, which can be used when making a system for
generation user tokens.

## Token/credentials
[Create credentials in Console](https://console.wgtwo.com/api-keys-redirect)

##### Required rights
- `id.user.token.create`

## grpcurl

### Initial setup

```shell script
git clone --depth 1 https://github.com/working-group-two/wgtwoapis.git
cd wgtwoapis
export OPERATOR_TOKEN=$(echo -n ${CLIENT_ID}:${CLIENT_SECRET} | base64 -w0)
```

### List all applicable rights
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/auth/v0/rights.proto \
  api.wgtwo.com:443 \
  wgtwo.auth.v0.RightService.List
```

### Check what a right will be expanded to
```shell script
grpcurl \
  -H "Authorization: Basic ${OPERATOR_TOKEN}"\
  -import-path . \
  -proto wgtwo/auth/v0/rights.proto \
  -d '
  {
    "rights": [
      "sms.*"
    ]
  }
  ' \
  api.wgtwo.com:443 \
  wgtwo.auth.v0.RightService.CheckExpansion
```

## Java / Kotlin

### Install dependencies
<JitpackDependency />

Then you can add `auth-grpc` and `utils-grpc`:

<ClientDependencies :clients="['auth-grpc', 'utils-grpc']"/>

### List all applicable rights
Returns a list of all applicable rights

<GithubCode :to="$frontmatter.codeList" />

### Check what a right will be expanded to
Returns a list of all the rights the given rights will be expanded to.

<GithubCode :to="$frontmatter.codeCheckExpansion" />

## Concepts
* [Three types of stubs: asynchronous, blocking, and future](https://grpc.io/docs/reference/java/generated-code/)
* [gRPC Concepts](https://grpc.io/docs/guides/concepts/)
