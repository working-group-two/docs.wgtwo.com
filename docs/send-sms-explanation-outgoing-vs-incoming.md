---
title: SMS direction OUTGOING vs INCOMING
topic: Send SMS
type: explanation
---

# SMS direction OUTGOING vs INCOMING

You can send an SMS with a `Direction` either as `OUTGOING` or `INCOMING`.

A traditional SMS sent from one of your subscribers to another of your subscriber passes through the system two times; one time as `OUTGOING` and once as `INCOMING`. With the correct permissions it is possible to omit the outgoing SMS if you are sending to one of your subscribers. What to use depends on what kind of scenario you're facing.

Outgoing means the message is going from one of your subscribers.
Incoming means the message is going to one of your subscribers.

You probably want `OUTGOING` if:
* The SMS should be as if it was sent from a subscriber's phone.
* You want it to work like having a phone and using it to send SMS.

You probably want `INCOMING` if:
* You want to send SMS to one of your subscribers, from a text number like `Wotel`.
* You're interested in sending towards a phone without having one to send from.
