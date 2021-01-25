---
title: OAuth 2.0 authorization
topic: auth
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
---

# OAuth 2.0 flow walkthrough

## Set up an OAuth Client

In order to use our OAuth flow, you will need to create an OAuth client.
This client is tied to a product in the _Developer Portal_.

### Create client
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

### Set scopes
1. Go to the `SCOPES` tab
2. Enable the three standard OAuth 2.0 scopes

<g-image src="@/assets/images/auth-set-scopes.png" alt="Set scopes" />

### Enable product for operator
1. Go to the `LISTING` tab
2. Enable the product for the operator of your targetted phone number

## Manually run the OAuth flow

<!-- <DemoConfigurer /> -->

<b-notification type="is-warning is-light" aria-close-label="Close notification" role="alert" :closable="false">
    <div>
      <p><b>We do not recommend implementing this flow manually</b></p>
      <p>There are good OAuth libraries for all common language, so these examples are only useful for testing the flow.</p>
    </div>
</b-notification>

### Open link in browser

To start the flow open the following link in your browser

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

### Exchange authorization code for access and refresh token

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

### Use access token to get user info
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
