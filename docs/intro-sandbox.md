---
title: Sandbox Environment
topic: intro
type: reference
typeOrder: 3
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---

# Sandbox Environment
Our sandboxed environment is hosted at `apisandbox.dub.prod.wgtwo.com:443`.

If you followed the [Get started](/intro/get-started/) guide, you have in fact already used it.

This is a simple mock service that implements our gRPC APIs. It will generate fake events for use in the events API,
and will return with some dummy response for the unary API calls.

## Authorization
You may invoke the sandbox environment without using any authorization.

Note that if you do include a `Authorization` header, it needs to be a valid access token obtained from https://id.wgtwo.com/.

## Customization 
`https://apisandbox.dub.prod.wgtwo.com/` exposes a webpage where you can apply some customization for your OAuth 2.0
client.

<g-image src="@/assets/images/sandbox-landing-page.png" alt="Landing page" />

<g-image src="@/assets/images/sandbox-config.png" alt="Configuration page" />

You will here be allowed to enter a list of phone numbers for your client ID.

When generating events, it will use one of these at random as the owner of the event.

> Note: This does require you to provide valid credentials

## Notes about the event API

If you do include credentials, the event API will generate events of types `SMS_EVENT` and `SMS_DELIVERY_EVENT` when
you invoke the SMS APIs.

These will be stored keyed on your client's client ID, so you may generate these events by sending SMSes using the same
OAuth 2.0 client as you listen to events with.
