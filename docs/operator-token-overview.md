---
title: Overview
topic: operator token
type: overview
roles:
  - OPERATOR
---

# Operator tokens

## Usage
https://api.wgtwo.com expects the operator credentials as a basic auth credential in the HTTP Authorization headers,
where client ID must be provided as username and client secret as the password:
```
Authorization: Basic {base64 of client ID:client secret}
```
