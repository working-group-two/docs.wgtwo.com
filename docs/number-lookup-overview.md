---
title: Overview
topic: number lookup
type: overview
roles:
  - THIRD_PARTY_DEVELOPER
sourceExamples:
  - examples/kotlin/thirdpartydev/number-lookup/src/main/kotlin/com/wgtwo/examples/thirdpartydev/provider/Provider.kt
---

# Number Lookup API

This is an API used to connect a number provider to our number lookup service.

## Intended audience

This API is designed for third-party phone number information providers.

This includes phone book services, spam detection services, and any other services that offer insights about phone
numbers.

## Usage

When you integrate as a number information provider, you'll receive a lookup request that contains a phone number.
Your task will be to classify them and provide a display name lookup.

The information you provide will assist wg2 in enhancing the call experience, such as setting the display name for
incoming calls.

## Include display name as part of call setup

### Get number information from provider
When a subscriber receives a call over VoLTE, we will check if there is any configured Number Lookup Providers for the
subscriber.

![](~/assets/images/number-lookup-4.svg)

During call setup a number lookup request will be sent to each of the enabled Number Lookup Providers, if any.

![](~/assets/images/number-lookup-1.svg)

### Show display name

If we have received any display name from the providers, we will show it to the subscriber.

This will be visible in the call screen, as seen in the image below where the display name is "Potential Spam".

![](~/assets/images/number-lookup-call.png)

> **Note:**
> If the phone has the number stored as a contact, the phone will typically use this.

## Error handling

If the provider returns a empty display name (no hit in the phonebook) or fails to respond within the deadline,
the call will be displayed as usual.

Results will be cached for a period of time to avoid unnecessary requests and latency.

## Continue reading

* [Technical Guide](/number-lookup/technical-guide/)
* [API reference](/number-lookup/api-reference/)
