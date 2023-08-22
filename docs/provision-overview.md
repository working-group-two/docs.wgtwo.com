---
title: Overview
topic: subscription profile
type: overview
hideWarning: true
---

# Subscription profile overview

This API allows to enable and disable capabilities for a subscription and get subscription information.
In order to access this API
your credentials need to have the `subscription.read` and `subscription.write` rights.

## Subscription API
This API allows you to retrieve information about the subscriber, including which services are enabled.

## Provision API
The API is based on a concept of actions with each action having a specific use case.
The `/provision/v2/[ACTIONNAME]` endpoints manage provisioning requests. The requests instruct the
network to update user profiles. It is designed as a standard REST API where multiple requests can
be handled in parallel.

All requests use the POST HTTP method.

We verify that the API key supplied is authorised to operate on behalf of that network
and secondly that the user or MSISDN indicated in the request was created by the same network.

The API does not give access to the actual data stored about individual subscribers.

Standard replies:
* **201:** Provision success. Will return the request ID for the created resource.

Example:
```json
{
    "requestid": "f2feb5be78cf4b03a28834729c44e3a2",
}
```

* **400:** Invalid action arguments.
* **404:** Subscription or sim not found.
* **429:** Rate limit exceeded.
* **500, 502:** Internal error.

As a general reporting strategy
the API responds with **201** to a duplicate request if the original was successful (idempotency).
