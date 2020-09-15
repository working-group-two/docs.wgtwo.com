---
title: Let the user uninstall your application
topic: auth
type: how-to
roles:
  - THIRD_PARTY_DEVELOPER
---

# Let the user uninstall your application

We require app developers [support letting the user uninstall their app](/auth/explanation/why-support-user-app-uninstallation/).

This should be used when a user choose to remove the application within your app.




## Flow
![Flowchart](~/assets/images/auth-revoke-session.svg)

1. Application requests a uninstall link.
2. Application redirects the user to the given uri which opens a page hosted by WGTwo ID.  
3. User confirms deleting the application by clicking a button in the page.
4. User is redirected back to the Application, and if valid, the Application must delete local user content (i.e. from a database) and wipe user sessions.

### Redirect
The user will be redirected back to the given redirect URI after logout with the query parameter `state` with the given
state value. A query parameter for `error` will be included in case of errors or the user cancelling the flow. 

### Generate a uninstall link
This endpoint requires authentication by a OAuth2 access token issues to your client using the `client_credentials` grant. 

You also need to include a valid access token of the given user.

This will return a 200 response with the redirect URI if successful.
Otherwise, a json explaining the error will be returned.

#### Request

```shell script
curl \
  --request POST \
  --header "Accept: application/json" \
  --header "Authorization: Bearer ${CLIENT_ACCESS_TOKEN}" \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --url https://id.wgtwo.com/ext-api/v0/auth/create-uninstall-magic-link \
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

#### Response
```json
{
  "redirectTo": "https://id.wgtwo.com/uninstall?revoke_token=(...)",
  "error": null,
  "errorDescription": null,
  "errorHint": null
}
```
