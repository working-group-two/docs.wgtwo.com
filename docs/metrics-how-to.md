---
title: Accessing Metrics
topic: metrics
type: how-to
prometheusConfig: https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/metrics/prometheus.yml
---

# Accessing Metrics

## Overview
Working Group Two exposes metrics that can help operators getting some operational insight. This data is exposed using the [OpenMetrics text format](https://openmetrics.io/).

This text format is the same as exposed by Prometheus. In addition to being supported by Prometheus, many other systems
has OpenMetrics integrations such as
[Datadog](https://docs.datadoghq.com/integrations/openmetrics/)
and [New Relic](https://docs.newrelic.com/docs/integrations/prometheus-integrations).

The HTTP endpoint we provide will give you the current state of all of your metrics. We do not provide a query API.

Please reach out to clarify what metrics you would need access to.

## Token/credentials
[Create credentials in Console](https://console.wgtwo.com/api-keys-redirect)

##### Required rights
- `metrics.read`

##### Placeholders used in samples:

|     Placeholder     | Description                              |
|:--------------------|:---------------------------------------- |
| `{{client ID}}`     | From credentials created in Console      |
| `{{client secret}}` | From credentials created in Console      |

**Base path: `https://api.wgtwo.com/metrics/v1`**

### Curl
```bash
curl -u {{client ID}}:{{client secret}} https://api.wgtwo.com/metrics/v1
```

### Prometheus
The below Prometheus config will scrape the metric endpoint from Working Group Two every 30 seconds,
fetching all available time series. Note that the configuration will contain secrets.

See: [prometheus.io › Configuration](https://prometheus.io/docs/prometheus/latest/configuration/configuration/)

<GithubCode :to="$frontmatter.prometheusConfig" />

#### Example: Run with Docker
> See: [prometheus.io › Using Docker](https://prometheus.io/docs/prometheus/latest/installation/#using-docker)

If you run the below commands, you should have Prometheus running successfully.

```bash
wget https://raw.githubusercontent.com/working-group-two/docs.wgtwo.com/master/examples/metrics/prometheus.yml

// Replace placeholders
sed -i "s/{{client ID}}/your client ID/" prometheus.yml
sed -i "s/{{client secret}}/your client secret/" prometheus.yml

docker run -p 9090:9090 -v prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
```

#### Grafana
> See: [grafana.com › Using Prometheus in Grafana](https://grafana.com/docs/grafana/latest/features/datasources/prometheus/)

As our metric API does not expose a query API, it cannot be used by Grafana directly.
However, Grafana has built-in support for Prometheus.


## Links
* [openmetrics.io](https://openmetrics.io/)
* [prometheus.io](https://prometheus.io/) › [Exposition Formats](https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format)
