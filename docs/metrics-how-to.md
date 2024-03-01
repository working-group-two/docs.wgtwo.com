---
title: Accessing Metrics
topic: metrics
type: how-to
sourceExamples:
  - examples/config/operator/metrics/prometheus.yml

---

# Accessing Metrics

## Overview

You may query our HTTP endpoint to get the current state of all the metrics that has been made available for you.
The metrics are exposed in the [OpenMetrics text format](https://openmetrics.io/), and can be scraped by Prometheus or
other systems that support this format.

These metrics are aimed for providing operational insight, and would not be suitable for billing purposes.

Please reach out to clarify what metrics you would need access to.

## Credentials

To use this API, you would need to have a OAuth 2.0 client and be granted the `metrics.read` scope.

See: [Get client access token](https://docs.wgtwo.com/guide/oauth2/get-client-access-token.html)

## Get metrics, curl

```shell script
curl -s --oauth2-bearer $ACCESS_TOKEN https://api.wgtwo.com/metrics/v1
```

## Get metrics, Prometheus

The below Prometheus config will scrape the metric endpoint every 30 seconds,
fetching all available time series. Note that the configuration will contain secrets.

You may replace `client_secret` with `client_secret_file` which should contain the path to a file containing the secret.

See: [prometheus.io › Configuration](https://prometheus.io/docs/prometheus/latest/configuration/configuration/)

<source-example
:src="$sourceExamplesMap['examples/config/operator/metrics/prometheus.yml']"
/>

### Example: Run with Docker

> See: [prometheus.io › Using Docker](https://prometheus.io/docs/prometheus/latest/installation/#using-docker)

If you run the below commands, you should have Prometheus running successfully.

```bash
# Store sample configuration to prometheus.yml, including actual credentials

docker run -p 9090:9090 -v prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
```

## Grafana

Many of our customers use Grafana to visualize their metrics.

In order to use Grafana with our metrics, you would need to have a Prometheus server running and scraping the metrics.

An alternative to running this yourself would be to use [Grafana Cloud](https://grafana.com/products/cloud/). In that
case you would typically run Grafana Agent, which is a Prometheus-compatible agent that can scrape metrics and send them
to Grafana Cloud.

## Links

* [openmetrics.io](https://openmetrics.io/)
* [prometheus.io](https://prometheus.io/) › [Exposition Formats](https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format)
