# Documentation Guidelines
***For docs.wgtwo.com***

**Inspiration/credits**
* https://www.divio.com/blog/documentation (lots of loaned text)
* https://developer.nexmo.com

## Overview
All public APIs must also have corresponding public documentation. This must include **API reference** documentation, should include **how-to listings** for the most common usages, and may include **tutorials** and **explanation** documentation where appropriate/needed.

_Documentation needs to be explicitly structured around these categories, and they all must be kept separate and distinct from each other._

## Documentation categories

### API reference
We will point to the source of truth: https://github.com/omnicate/wgtwoapis
`.proto` files in `loltel/proto/external/*` will be synced to this repository and is provided as the API reference for each API. Each team is responsible for writing documentation in their `.proto` files. This documentation is also automatically turned into e.g. Java documentation in the generated gRPC Java client.

**Example**: https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto

### How-to listings
* Help the reader achieve their goals.
  * E.g. How to send SMS, How to list a users voicemails.
* Ordered example snippets/listings (prerequisites, install dependencies, call this method, should yield a result like this)
* Should include code snippets that can be copy-pasted (in 1 or more languages)
  * Aim for 1 article per use case (ACK'ing messages is part of receiving SMS how-to; no one ever wants to ack something without reason, but someone does have a goal of receiving SMS).

**Example**: https://developer.nexmo.com/messaging/sms/code-snippets/receiving-an-sms/node

### Tutorials
* Is learning-oriented (hand holding/teaching)
* Helps the user get started
* Hold their hand until they produce a meaningful output (hello-world)
* Should be tested by someone before it's released to make sure it's understandable, * doesn't have undeclared dependencies and works well.

**Example** : https://flexboxfroggy.com/


### Explanation
* Explanation, or discussions, clarify and illuminate a particular topic
* They are understanding-oriented

**Example**: https://blog.runscope.com/posts/understanding-oauth-2-and-openid-connect

## Programming languages for the examples
**Kotlin** and **JavaScript** are the currently most relevant languages.

We should provide code examples in the languages that are most relevant for our API users.
