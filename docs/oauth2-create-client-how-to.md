---
title: Create OAuth 2 client
topic: oauth 2
type: how-to
typeOrder: 1
roles:
  - THIRD_PARTY_DEVELOPER
---

# Create OAuth 2 client

In order to use our OAuth flow, you will need to create an OAuth client.
This client is tied to a product in the _Developer Portal_.

## Create client
1. Sign in at https://developer.wgtwo.com
2. Create an organization
3. Create a product
4. Go to the clients tab, and click `CREATE NEW CLIENT`

<g-image src="@/assets/images/auth-create-client.png" alt="Set scopes" />

| Field                             | Value                        |
| --------------------------------- | ---------------------------- |
| Client description                | this is a test               |
| Login redirect URIs               | https://example.com/callback |
| Post revoke consent redirect URIs | https://example.com/revoke   |

The returned credentials will be displayed only once, so make sure to save them.

## Set scopes
1. Go to the `SCOPES` tab
2. Enable the three standard OAuth 2.0 scopes

<g-image src="@/assets/images/auth-set-scopes.png" alt="Set scopes" />

## Enable product for operator
1. Go to the `LISTING` tab
2. Enable the product for the operator of your targetted phone number
