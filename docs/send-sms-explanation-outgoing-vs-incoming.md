---
title: SMS direction OUTGOING vs INCOMING
topic: Send SMS
type: explanation
---

# SMS direction OUTGOING vs INCOMING

You can send an SMS with a `Direction` either as `OUTGOING` or `INCOMING`.

A traditional SMS sent from one of your subscribers to another subscriber passes through the system two times. One time as `OUTGOING` and once as `INCOMING`. With the correct permissions it is possible to omit the outgoing SMS if you are sending to one of your subscribers. What to use depends on what kind of scenario you're facing.

You probably want `OUTGOING` if:
* The SMS should be as if it was sent from a subscriber's phone.
* To think of it like you have a phone and want to use it, then you always want `OUTGOING`

You probably want `INCOMING` if:
* You want to send SMS to one of your subscribers, say from `Wotel`. The sender can be text based.
* You're also interested in sending towards a phone without having one to send from.
