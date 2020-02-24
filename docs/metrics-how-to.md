---
title: Accessing Metrics
topic: metrics
type: how-to
---

# Accessing Metrics

## Overview
Working Group Two exposes metrics to that can help operators getting some operational insight.
This is exposed in the [Open Metrics text format](https://openmetrics.io/)  ([details](https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format)).

We do support this by exposing a custom Prometheus instance, containing relevant time series.
As we use Prometheus, metrics fetching is pull based.

Please reach out to clarify needs and setup of this instance.

## Token/credentials
* [Get credentials from Console](https://console.wgtwo.com/api-keys-redirect)

  Required right: `metrics.prometheus.read`

## Configuration
Replace `{{id}}`, `{{client ID}}` and `{{client secret}}` with their actual values

|     Placeholder     | Description                              |
|:--------------------|:---------------------------------------- |
| `{{id}}`            | Identifier provided by Working Group Two |
| `{{client ID}}`     | From credentials created in Console      |
| `{{client secret}}` | From credentials created in Console      |

**Base path: `https://api.wgtwo.com/metrics/v1/prometheus/{{id}}`**

### Invoke health check to test credentials
```bash
curl -u {{client ID}}:{{client secret}} https://api.wgtwo.com/metrics/v1/prometheus/{{id}}/-/healthy
```

### Configure Prometheus federation
If you already run Prometheus or would like to control data retention, doing federation from our Prometheus can be a
good choice.

The below Prometheus config will scrape your custom Prometheus instance at Working Group Two every 30 seconds,
fetching all available time series. Note that the configuration will contain secrets.

See: [prometheus.io › Federation](https://prometheus.io/docs/prometheus/latest/federation/)

```yaml
global:
  scrape_interval:     30s
  evaluation_interval: 30s

scrape_configs:
- job_name: 'federate'

  honor_labels: true
  metrics_path: '/metrics/v1/prometheus/{{id}}/federate'

  scheme: https
  basic_auth:
    username: '{{client ID}}'
    password: '{{client secret}}'

  params:
    'match[]':
      - '{__name__=~".+"}'

  static_configs:
    - targets:
      - 'api.wgtwo.com:443'
```

#### Example: Run with Docker
See: [prometheus.io › Using Docker](https://prometheus.io/docs/prometheus/latest/installation/#using-docker)

```bash
docker run \
    -p 9090:9090 \
    -v /tmp/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
```

For testing that federation works as expected, you may run this with the above config.

### Grafana
Grafana has built-in support for Prometheus.

It is possible to point your Grafana to api.wgtwo.com directly, which might be a good solution if you do not already
run Prometheus and want to get started quickly.

See: [grafana.com › Using Prometheus in Grafana](https://grafana.com/docs/grafana/latest/features/datasources/prometheus/)


## Links
* [openmetrics.io](https://openmetrics.io/)
* [prometheus.io › Exposition Formats](https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format)

