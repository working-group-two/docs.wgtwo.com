---
title: Support revoking consent
topic: oauth 2.0
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
---

# Support revoking consent

For third party apps, we require app developers to implement subscriber initiated [revoking of consent](/oauth-2-0/why-support-user-revoking-of-consent/),
so that they can easily deauthorize an application.

## Definitions

> The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
> NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
> "OPTIONAL" in this document are to be interpreted as described in
> [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## Flow
> A sequence diagram is included [here](#flow-chart).

1. The user MUST be able to prompt the third party application (app) to revoke all consents it has given to the app (i.e. clicking a button).
2. The app SHALL request a _revoke consent magic link_ from Cisco, supplying a [random, non-guessable `state`](https://auth0.com/docs/protocols/state-parameters#csrf-attacks).
3. The app SHALL redirect the user to the given link, which opens the ID webpage.
4. The user MAY confirm/cancel revoking consent (the user MAY also just close/leave the webpage).
5. The user is redirected back to the app, and the app MUST validate the state, and if valid MAY delete local user content (i.e. from a database) and wipe user sessions to reflect that the app no longer has access to the users' data/APIs.

## Redirect
The user will be redirected back to the given redirect URI after logout with the query parameter `state` with the given
state value. A query parameter for `error` will be included in case of errors or the user cancelling the flow.

## Generate a revoke consent magic link
This endpoint requires authentication by an OAuth2 access token issued to your client using the `client_credentials` grant.

You also need to include a valid user access token.

This will return a 200 response with the redirect URI if successful.
Otherwise a 400 response code will be given, with a json structure explaining the error.

## Request

```shell script
curl \
  --request POST \
  --header "Accept: application/json" \
  --header "Authorization: Bearer ${CLIENT_ACCESS_TOKEN}" \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --url https://id.wgtwo.com/ext-api/v0/auth/create-revoke-consent-magic-link \
  --data token="${USER_ACCESS_TOKEN}" \
  --data redirectTo="${REDIRECT_URI}" \
  --data state="${STATE}"
```

| Name                | Description                                                                              |
|---------------------|------------------------------------------------------------------------------------------|
| CLIENT_ACCESS_TOKEN | Access token from client credentials grant                                               |
| USER_ACCESS_TOKEN   | Access token for the user                                                                |
| REDIRECT_URI        | URI where the user should be redirected to afterwards, must be added in developer portal |
| STATE               | Opaque state that will be included in final redirect                                     |

### Response
```json
{
  "redirectTo": "https://id.wgtwo.com/revoke-consent?revoke_token=(...)",
  "error": null,
  "errorDescription": null,
  "errorHint": null
}
```

## Flow chart
![Flowchart](~/assets/images/auth-revoke-session.svg)
