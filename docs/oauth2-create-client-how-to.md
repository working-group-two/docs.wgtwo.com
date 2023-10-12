---
title: Create OAuth 2.0 client
topic: oauth 2.0
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
---

# Create OAuth 2.0 client

In order to use our OAuth flow, you will need to create an OAuth client.
This client is tied to a product in the _Developer Portal_.

## Create client
1. Sign in at https://developer.wgtwo.com
2. Create an organization
3. Create a product
4. Go to the `Technical integration` tab, and click `ADD OAUTH CLIENT`

If you are creating a product for subscribers, you will need to fill in your redirect URIs as you will be using OAuth
2.0's Authorization Code Flow.

For operator products this info is not required as you will be using the Client Credentials Flow.

<g-image src="@/assets/images/auth-create-client.png" alt="Set scopes" />

| Field                             | Value                        |
| --------------------------------- | ---------------------------- |
| Client description                | this is a test               |
| Login redirect URIs               | https://example.com/callback |
| Post revoke consent redirect URIs | https://example.com/revoke   |

The returned credentials will be displayed only once, so make sure to save them.

## Set scopes
1. Go to the `Technical integration` tab and click in navigation bar `Enable API scopes`.
2. Enable the three standard OAuth 2.0 scopes.

<g-image src="@/assets/images/auth-set-scopes.png" alt="Set scopes" />

## Enable product for operator
1. Go to the `Product information` tab and click in navigation bar `Distribution and availability`.
2. Select the operators you want to make your product available for. Operators will then be able to enable this product for their subscribers.

## That's it
You can now start playing with our APIs!

In order to get your product displayed in our market placed, you will need to fill in some extra information.
But before you do that, please go ahead with your integration.

All fields can be changed until you submit your product, so feel free to keep updating it.
