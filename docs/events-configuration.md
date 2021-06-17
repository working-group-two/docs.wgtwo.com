---
title: Configuration and types
topic: events
type: explanation
roles:
  - THIRD_PARTY_DEVELOPER
  - OPERATOR
---

# Configuration and types

Depending on your need, you may choose between some different types of subscriptions for events.

For simple testing, you may start with a regular subscription without setting any other parameters than the list of
event types you would like to receive.

**Example:**
```json
{
  "type": ["HANDSET_UPDATE_EVENT"]
}
```

## Recommended production configuration
For production, we do recommend the following settings:

1. `queue_name` _Events are shared between all listeners with this name._
2. `durable_name` _Even if all clients are disconnected, you will still be able to resume from current position._
3. `manual _ack` _You can ack after you have successfully read the message to ensure nothing is lost in transit. If a message is not acked, it will be resent._
4. `max_in_flight` _You will not have more than this amount of unacknowledged messages_

**Example**
```json
{
  "queue_name": "my-queue-name",
  "durable_name": "my-durable-name",
  "max_in_flight": 50,
  "manual_ack": {
    "enable": true,
    "timeout": "30s"
  }
}
```

Setting queue and durable name will allow you can share load between your instances, and that you can resume streaming
of the events from your current position if your client goes down.

Enabling `manual_ack` and setting `max_in_flight` will allow clients to rate limit traffic, and ensure events are
not dropped before they are properly handled.

It is recommended to ensure event processing is done such that events may be processed out of order. If processing
_must_ be done in order, `max_in_flight` must be set to `1`. 


> **Note**
> 
> Streams are expected to timeout or disconnect.
> When this happens, the client is expected to simply reconnect.
> As the client has `durable_name` set, the client will resume where it left.

## Start position
Our event server keeps 30 minutes of history.

When your client connects, you may decide at which position it should start reading

#### Options
- `start_at_sequence` Start at a given sequence number (`0` will read from oldest history)
- `start_at_timestamp` Start at the given timestamp
- `start_at_time_delta` Start at a given time offset, e.g. 5 minutes ago
- `start_with_last_received` Start with the last received event

If omitted the client will omit historical data and start reading new events only.

## Configuration

### Manual acks
If enable, this will require clients to do a gRPC call to manual acknowledge events. If a event is not acknowledged
within its timeout, it will be retransmitted.

The event's metadata field `is_redelivered` will be set to true for the retransmitted event.

If manual acks is not enabled, a event will be implicitly acked after the server has sent the gRPC message.
In case of gRPC issues, you may still get messages redelivered.

#### Options
- `enable` Set to true if enabled
- `timeout` Set to the desired ack timeout

### Max in-flight
The server will not send more than `max_in_flight` messages before they are acknowledged.
If your client has strict requirements to process all events in-order, this must be set to 1.

This setting is most useful if combined with manual acks.

## Subscription types

### Regular
The subscriptions remembers theirs position while the client is connected. That is, no information is kept on server
after disconnect.

Will start reading from the the specified start position if specified.
If no start position is set, it will skip previous events.

#### Mandatory input
- `type` List of event types

#### Optional input
- `start_position` [Start position, one of](#start-position)
  - `start_at_sequence`
  - `start_at_timestamp`
  - `start_at_time_delta`
  - `start_with_last_received`
- `manual_ack` [Manual ack config](#manual-acks)
  - `enable` Enable manual ack (true/false)
  - `timeout` Timeout before resending unacknowledged message
- `max_in_flight` [Max number of concurrent unacknowledged events](#max-in-flight)


### Durable
The subscriptions remember their position even if the client disconnects.

It will start from this position when it starts if the subscription is still present in the server (expires after 1h).

This subscription identify itself by `client_id` + `durable_name`

#### Mandatory input
- `type` List of event types
- `client_id` Name of the client
- `durable_name` Name of the durable connection

#### Optional input
- `start_position` [Start position, one of](#start-position)
  - `start_at_sequence`
  - `start_at_timestamp`
  - `start_at_time_delta`
  - `start_with_last_received`
- `manual_ack` [Manual ack config](#manual-acks)
  - `enable` Enable manual ack (true/false)
  - `timeout` Timeout before resending unacknowledged message
- `max_in_flight` [Max number of concurrent unacknowledged events](#max-in-flight)

### Queue
If two subscriptions share a queue name they are member of the same queue group.

Any event published will only be sent to one of the connected clients, so this can be used to share load between
two clients.

If all connected clients are disconnected, position will be lost.
It will then start reading from the the specified start position if specified, or else skip previous events.

If there are still some connected clients, it will ignore start position and start reading from their position.

#### Mandatory input
- `type` List of event types
- `client_id` Name of the client
- `queue_name` Name of the queue (must be the same for all clients that should share load)

#### Optional input
- `start_position` [Start position, one of](#start-position)
  - `start_at_sequence`
  - `start_at_timestamp`
  - `start_at_time_delta`
  - `start_with_last_received`
- `manual_ack` [Manual ack config](#manual-acks)
  - `enable` Enable manual ack (true/false)
  - `timeout` Timeout before resending unacknowledged message
- `max_in_flight` [Max number of concurrent unacknowledged events](#max-in-flight)

### Queue/Durable
A durable queue will keep state on the server even if all subscriptions member of the gueue group has
disconnected.

Each connected client will get a share of the traffic as for queue, but you may resume reading from
the previous position even if all clients are disconnected.

#### Mandatory input
- `type` List of event types
- `durable_name` Name of the durable connection
- `queue_name` Name of the queue (must be the same for all clients that should share load)

#### Optional input
- `start_position` [Start position, one of](#start-position)
  - `start_at_sequence`
  - `start_at_timestamp`
  - `start_at_time_delta`
  - `start_with_last_received`
- `manual_ack` [Manual ack config](#manual-acks)
  - `enable` Enable manual ack (true/false)
  - `timeout` Timeout before resending unacknowledged message
- `max_in_flight` [Max number of concurrent unacknowledged events](#max-in-flight)
