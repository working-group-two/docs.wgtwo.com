---
title: OAuth 2.0 Authorization
topic: auth
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
---

# OAuth 2.0 Walkthrough of the full flow

## Setup a OAuth Client

In order to use our OAuth flow, you will need to create a OAuth client.
This client is tied to a product defined in our Developer Portal.

### Create client
1. Log in at https://developer.wgtwo.com using a Google account
2. Create a new organization
3. Create a product
4. Go to the tab clients, and click `CREATE NEW CLIENT`

<g-image src="@/assets/images/auth-create-client.png" alt="Set scopes" />

| Field                             | Value                        |
| --------------------------------- | ---------------------------- |
| Client description                | test                         |
| Login redirect URIs               | https://example.com/callback |
| Post revoke consent redirect URIs | https://example.com/revoke   |

The returned credentials will be displayed only once.

<DemoConfigurer />

### Set applicable scopes
1. Go to the `SCOPES` tab
2. Enable the three standard OAuth 2.0 scopes

<g-image src="@/assets/images/auth-set-scopes.png" alt="Set scopes" />

### Enable product for your operator
1. Go to the `LISTING` tab
2. Enable the product for the operator of your phone number

## Manually run the OAuth flow
<b-notification type="is-warning is-light" aria-close-label="Close notification" role="alert">
  <div class="is-flex">
    <div>
      <p><b>We do not recommend implementing this flow manually</b></p>
      <p>There are good OAuth libraries for all common language, so these examples are only useful for showing the flow.</p>
      </div>
    </div>
</b-notification>

Open the link in your browser to start the flow:
```shell script
https://id.wgtwo.com/oauth2/auth?response_type=code&scope=phone offline_access&client_id=${CLIENT_ID}&redirect_uri=https://example.com/callback&state=this-is-a-key-set-by-the-caller
```

This should take you to our login page, where you will be sent a SMS with a PIN code.
After completing the login flow, you will be asked to grant the requested access to the product.

The scopes here will allow you to get the real phone number of the user and to obtain a refresh token.

The browser will then redirect back to the set redirect URI.
In our case, this will be similar to this:
 
```
https://example.com/callback?code=some-random-code-generated-by-the-oauth-flow&scope=phone%20offline_access&state=this-is-a-key-set-by-the-caller
```

As we are using the authorization code grant, there will be a server side call to exchange this code with the access
and refresh tokens. 
```shell script
curl \
  -u ${CLIENT_ID}:${CLIENT_SECRET} \
  --url 'https://id.wgtwo.com/oauth2/token' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=authorization_code \
  --data code="{CODE FROM THE CALLBACK URI}" \
  --data 'redirect_uri=https://example.com/callback'
```

```json
{
  "access_token": "<<redacted>>",
  "expires_in": 3600,
  "refresh_token": "<<redacted>>",
  "scope": "phone offline_access",
  "token_type": "bearer"
}
```

### Use your access token to get user info
```shell script
export ACCESS_TOKEN="<<redacted>>"
curl -H "Authorization: Bearer $ACCESS_TOKEN" https://id.wgtwo.com/userinfo
```

```json
{
  "phone_number":"+46123456789",
  "phone_number_verified":true,
  "sid":"42e(...)sff",
  "sub":"73e(...)dfc"
}
```
