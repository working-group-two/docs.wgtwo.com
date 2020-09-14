---
title: Let the user uninstall your application
topic: auth
type: how-to
---

# Let the user uninstall your application

We support a flow where you can initiate the user to remove access to your application.

This should be used when a user choose to remove the application within your app.  

## Flow
![](~/assets/images/auth-revoke-session.svg)

1. Application requests a uninstall link.
2. Application redirects the user to the given uri which opens a page hosted by WGTwo ID.  
3. User confirms deleting the application by clicking a button in the page.
4. User is redirected back to the Application, and if valid, the Application must delete local user content (i.e. from a database) and wipe user sessions.
5. The user is shown a success page for uninstalling the app (or just app front-page).

In Step 2, the application may optionally include a `redirect_uri` and `state` query parameter.
In that case, the user is redirected accordingly. 

### Generate a uninstall link
This endpoint requires authentication by a OAuth2 access token issues to your client using the `client_credentials` grant. 

You also need to include a valid access token of the given user.

#### Request
```shell script
curl \
  --request POST \
  --header "Accept: application/json" \
  --header "Authorization: Bearer ${CLIENT_ACCESS_TOKEN}" \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --url https://id.wgtwo.com/ext-api/v0/auth/create-uninstall-magic-link \
  --data token="${USER_ACCESS_TOKEN}"
```

#### Response
```json
{
  "redirectTo": "https://id.wgtwo.com/uninstall?revoke_token=(...)"
}
```

The user should then be redirected to the uri given by `redirectTo`.

You are allowed to append the query parameters `state` and `redirect_uri`.

If you set `redirect_uri`, the user will be redirected back you after the flow. This uri must be allowlisted at [developer.wgtwo.com](https://developer.wgtwo.com/) as a _logout redirect URI_ on your client.
If set, the query parameter `state={state}` will be appended to the given uri.
