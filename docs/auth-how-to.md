---
title: Authorization
topic: introduction
type: how-to
---

# Authorization towards our APIs

## Overview

We do support a few different authorization schemes for our APIs for different use cases.

|                                     |                                                                            |
| ----------------------------------- | -------------------------------------------------------------------------- |
| [Operator Tokens](#operator-tokens) | Credentials used by operators                                              |
| [User Tokens](#user-tokens)         | Static credentials for subscribers doing stuff with their own subscription |
| [OAuth 2.0](#oauth-20)              | Third Party applications invoking our API, possibly on behalf of a user    |


### Operator tokens
#### Usage
https://api.wgtwo.com expects the operator credentials as a basic auth credential in the HTTP Authorization headers,
where client ID must be provided as username and client secret as the password:
```
Authorization: Basic {base64 of client ID:client secret}
```


### User tokens
#### Usage
https://api.wgtwo.com expects the user token as a Bearer credential in the HTTP Authorization headers:
```
Authorization: Bearer {usertoken}
```


### OAuth 2.0

#### Usage
https://api.wgtwo.com expects the access token as a Bearer credential in the HTTP Authorization headers:
```
Authorization: Bearer {access token}
```

#### Endpoints
> **Base URI:** &nbsp; https://id.wgtwo.com

| Endpoint               | URI                                         | Credentials |
| ---------------------: | ------------------------------------------- | ----------- |
| Authorization endpoint | https://id.wgtwo.com/oauth2/auth            | public      |
| Token endpoint         | https://id.wgtwo.com/oauth2/token           | basic auth  |
| User info endpoint     | https://id.wgtwo.com/userinfo               | token       |
| Log-out endpoint       | https://id.wgtwo.com/oauth2/sessions/logout | public      |
| Revoke endpoint        | https://id.wgtwo.com/oauth2/revoke          | basic auth  |

The token and revoke endpoints are protected using basic auth, where client ID must be provided as the username and 
client secret as the password.

#### Grant types supported
- Authorization Code
- Client Credentials

#### Scopes
The required scopes for each service is described in their documentation.

In addition to those, we have some common scopes for our OAuth 2.0 flows

| Scope          | Description                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------- |
| openid         | If included, the token endpoint will include a ID token (signed JWT) in its response        |
| offline_access | If included, the token endpoint will will include a refresh token                           |
| phone          | If included, the ID token and the user info endpoint will include the subjects phone number |

#### Subject identifier
We use pairwise Subject Identifiers, which will calculate unique subject values for each Sector Identifier.
That is, two clients will not be able to correlate end-user activity without the consent of the user.

Note that many of our APIs does include phone numbers, which will provide an ID of the user. The phone scope will
therefore be required for most services, but does require user consent.


#### JSON Web Key Set
> **JWKS endpoint:** &nbsp; https://id.wgtwo.com/.well-known/jwks.json

All issued JWTs are signed using the RS256 signing algorithm.

The JWT is signed using one of these keys, but the endpoint may contain multiple keys to allow key rotation.

It is recommended to use a library that fetches the keys dynamically as they may be re rotated without notice.
