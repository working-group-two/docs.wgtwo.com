---
title: Technical guide
topic: number lookup
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
sourceExamples:
  - examples/grpcurl/thirdpartydev/number-lookup/provider.sh
  - examples/kotlin/thirdpartydev/number-lookup/src/main/kotlin/com/wgtwo/examples/thirdpartydev/provider/Provider.kt
---

# Number Lookup API - Technical Guide

> **This guide will show you how to set up a Number Lookup Provider.**
>
> You should have an understanding of how this works before continuing,
> see [Overview](number-lookup/setup-number-lookup-overview/).

## Prerequisites

This guide assumes you are able to create a OAuth 2.0 client and get an access token.

See [Get client access token](https://docs.wgtwo.com/guide/oauth2/get-client-access-token.html) for how to get the
access token.

> **Note:** <br />
> For testing using our sandbox endpoint, authentication headers may be skipped.

### Required scope

`lookup.number:read`

## How to use the API
When you connect to this API, you will get a stream of number lookup requests for which you should respond with
information about the number.

<CodeSnippet
:grpcurl="$sourceExamplesMap['examples/grpcurl/thirdpartydev/number-lookup/provider.sh']"
:kotlinDeps="['auth', 'lookup']"
:kotlin="
$sourceExamplesMap['examples/kotlin/thirdpartydev/number-lookup/src/main/kotlin/com/wgtwo/examples/thirdpartydev/provider/Provider.kt']"
/>

## Flow
The API is implemented as a bidirectional gRPC service, where the provider responds to requests from the server.

The Number Provider sets up one or more connections to our API. This connection should use keep-alive, and has a max
connection age of one hour +/- a 10 % jitter. Once max connection age is reached, or any exception occurs, the
connection should be re-established.

> **Note:** <br />
> Although the connection is set up from the provider to wg2, all requests are initiated from wg2.

![](~/assets/images/number-lookup-flow.svg)

Using round-robin, wg2 will send number lookup requests
over these connections for which the provider will respond with the display name.

Responses will be cached for a period of time to avoid unnecessary requests and latency.

![](~/assets/images/number-lookup-sequence.svg)

## Request / Response

For matching the response to the original request, the provider must include the original request in the response.

The returned display name may be empty if the provider does not have a display name for the number, and
may be cached for the duration specified.

### Request
```prototext
NumberLookupRequest {
  id: "opaque string"
  number {
    e164: "+1234567890"
  }
}
```

### Response
```prototext
NumberLookupResponse {
  number_lookup_request { } # Fields omitted for brevity

  result {
    name: "John Doe"
  }
}
```

### Response, upstream error
```prototext
NumberLookupResponse {
  number_lookup_request { } # Fields omitted for brevity

  error {
    message: "Database unavailable"
  }
}
```

## Limitations for display name

The display name returned must be max 60 characters, and may only contain the following:

- alphanumeric (`a-z`, `A-Z`, `0-9`)
- ` `&nbsp;(space), `-`, `_`
- `.`, `!`, `%`, `*`, `'`, `+`, `~`, `` ` ``

Characters not matching the above will be stripped.

## Error handling

If there are no healthy connections for the provider, the provider will be ignored.

Should the provider fail to respond within the set deadline, it will be treated as if it returned an empty result.

For upstream errors, the provider must return an error, accompanied by a descriptive, human-readable message.

## Cache

As part of the response, the provider can include a cache TTL.

This is the time in seconds that the display name should be cached on the wg2 side.
If not set, a default cache TTL documented in the proto file will be used.

```prototext
NumberLookupResponse {
  number_lookup_request { } # Fields omitted for brevity

  result {
    name: "John Doe"
  }

  # Optional, set to default if not set
  cache_control {
    max_age {
      seconds: 3600  # 1 hour, google.protobuf.Duration
    }
  }
}
```

## Recommended gRPC connection settings

| Setting                         | Value      | Description                        |
|:--------------------------------|:-----------|------------------------------------|
| keep-alive period               | 1 minute   | Must be ≥ 1 minute and ≤ 5 minutes |
| keep-alive timeout              | 10 seconds |                                    |
| permit keep-alive without calls | true       |                                    |

### Keep-Alive

The load balancer hosting api.wgtwo.com will silently drop connections if they have been idle for 350 seconds (5m 50s).

To avoid this, the provider should send a keep-alive message every minute.

## Continue reading

* [API reference](/number-lookup/api-reference/)

## Concepts

* [gRPC concepts](https://grpc.io/docs/guides/concepts/)
* [Kotlin gRPC tutorial](https://grpc.io/docs/languages/kotlin/basics/)
* [Java gRPC stubs](https://grpc.io/docs/reference/java/generated-code/)
