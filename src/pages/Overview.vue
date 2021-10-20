<template>
  <div>
    <Header></Header>
    <div class="landing-page">
      <h2 class="title is-2">V0 - Core Network APIs</h2>
      <section class="intro-boxes">
        <div class="intro-box">
          <h3 class="title is-3">Third Party Developers</h3>
          <p>
            If you're a third party developer (someone who has no relation to
            us), you can can create an account in our Developer Portal at
            <a href="https://developer.wgtwo.com">https://developer.wgtwo.com</a
            >. From here you can create OAuth clients, which will allow our
            subscribers to grant you an access token to act on their behalf.
          </p>
        </div>
        <div class="intro-box">
          <h3 class="title is-3">Mobile Operators</h3>
          <p>
            If you work for one of our partner operators, you can log in to our
            Partner Portal at
            <a href="https://console.wgtwo.com">https://console.wgtwo.com</a>.
            From here you can create API keys which will grant you full access
            to all APIs for all of your subscribers. If you follow the examples
            you will be up and running within minutes!
          </p>
        </div>
      </section>
      <section>
        <h3 class="title is-3">Getting started</h3>
        <div class="api-boxes">
          <g-link
            v-for="entry in intro"
            :to="entry.url"
            class="api-box"
            :key="entry.title"
          >
            <div class="api-icon-wrap">
              <component :is="entry.icon"></component>
            </div>
            <div class="title-and-text">
              <h4 class="title is-4">{{ entry.title }}</h4>
              <p>{{ entry.text }}</p>
            </div>
            <b-icon
              icon="arrow-right"
              size="is-medium"
              type="is-primary"
            ></b-icon>
          </g-link>
        </div>
      </section>
      <section>
        <h3 class="title is-3">Available APIs</h3>
        <div class="api-boxes">
          <g-link
            v-for="api in apis"
            :to="api.url"
            class="api-box"
            :key="api.title"
          >
            <div class="api-icon-wrap">
              <component :is="api.icon"></component>
            </div>
            <div class="title-and-text">
              <h4 class="title is-4">{{ api.title }}</h4>
              <p>{{ api.text }}</p>
            </div>
            <b-icon
              icon="arrow-right"
              size="is-medium"
              type="is-primary"
            ></b-icon>
          </g-link>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import IntroIcon from "~/assets/images/introduction-icon.svg";
import CallForwardingIcon from "~/assets/images/call-forwarding-icon.svg";
import DataIcon from "~/assets/images/data-icon.svg";
import EventsIcon from "~/assets/images/events-icon.svg";
import SmsIcon from "~/assets/images/sms-icon.svg";
import MmsIcon from "~/assets/images/mms-icon.svg";
import UsertokensIcon from "~/assets/images/key-icon.svg";
import VoicemailIcon from "~/assets/images/voicemail-icon.svg";
import SubscriptionProfileIcon from "~/assets/images/subscription-profile-icon.svg";
import MetricsIcon from "~/assets/images/metrics-icon.svg";
import AuthIcon from "~/assets/images/id-auth-icon.svg";
import SplashLogo from "~/assets/images/logo-splash.svg";
import IllustrationDeveloper from "~/assets/images/illustration-developer.svg";
import IllustrationPlant from "~/assets/images/illustration-plant.svg";

export default {
  metaInfo: {
    title: "WGTWO API documentation",
    titleTemplate: null,
  },
  components: {
    IntroIcon,
    CallForwardingIcon,
    DataIcon,
    EventsIcon,
    SmsIcon,
    MmsIcon,
    UsertokensIcon,
    VoicemailIcon,
    SubscriptionProfileIcon,
    MetricsIcon,
    AuthIcon,
    SplashLogo,
    IllustrationDeveloper,
    IllustrationPlant,
  },
  data: () => ({
    intro: [
      {
        icon: "IntroIcon",
        title: "Quickstart Guide",
        text: "Start playing with our APIs.",
        url: "/intro/get-started/",
      },
      {
        icon: "IntroIcon",
        title: "API Structure and Libraries",
        text: "Supported languages and SDKs.",
        url: "/intro/api-structure-and-libraries/",
      },
      {
        icon: "AuthIcon",
        title: "Authorization",
        text: "Connect to our OAuth 2.0 server.",
        url: "/oauth-2-0/overview/",
      },
    ],
    apis: [
      {
        icon: "SmsIcon",
        title: "SMS",
        text: "Send SMS to or from anyone on your platform.",
        url: "/sms/send-sms/",
      },
      {
        icon: "MmsIcon",
        title: "MMS",
        text: "Send MMS to or from anyone on your platform.",
        url: "/mms/send-mms/",
      },
      {
        icon: "EventsIcon",
        title: "Events",
        text: "Get events for anything happening in the network",
        url: "/events/listen-for-events/",
      },
      {
        icon: "DataIcon",
        title: "Data",
        text: "Manage your data connection",
        url: "/data/set-custom-dns/",
      },
      {
        icon: "VoicemailIcon",
        title: "Voicemail",
        text: "Access a subscribers Voicemail inbox, including the audio files.",
        url: "/voicemail/list-play-delete-and-configure-voicemails/",
      },
      {
        icon: "CallForwardingIcon",
        title: "Call forwarding",
        text: "Set a subscribers call forwarding",
        url: "/call-forwarding/set-call-forwarding/",
      },
      {
        icon: "SubscriptionProfileIcon",
        title: "Subscription profile",
        text: "Manage your subscribers's profiles. Enable/disable calls, SMS, etc.",
        url: "/subscription-profile/overview/",
      },
      {
        icon: "MetricsIcon",
        title: "Metrics",
        text: "Access relevant OpenMetrics time series directly from our systems.",
        url: "/metrics/accessing-metrics/",
      },
    ],
  }),
};
</script>

<style scoped>
.landing-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px;
}

.landing-page p {
  font-size: 18px;
}

.landing-page section {
  margin-top: 40px;
  margin-bottom: 40px;
}

.splash-logo {
  padding: 36px;
}

.splash-logo svg {
  max-width: 128px;
  display: block;
  margin: 0 auto;
}

.intro-boxes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.intro-box,
.api-box {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  padding: 16px;
  color: rgba(0, 0, 0, 0.67);
}

.intro-box {
  width: 100%;
  margin: 32px 0;
}

.intro-box + .intro-box {
  margin-top: 0;
}

.intro-box p {
  font-size: 15px;
}

.landing-page .title {
  margin: 8px 0;
}

.landing-page p + .title {
  margin-top: 48px;
}

.api-box {
  display: flex;
  align-items: center;
  width: 100%;
}

.api-box + .api-box {
  margin-top: 24px;
}

.api-box .title {
  color: var(--primary);
}

.api-box .api-icon-wrap {
  width: 90px;
  height: 90px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.api-box .title-and-text {
  width: 100%;
}

@media screen and (min-width: 769px) {
  .intro-box {
    width: calc(50% - 12px);
  }
  .intro-box + .intro-box {
    margin-top: 32px;
  }
}
</style>
