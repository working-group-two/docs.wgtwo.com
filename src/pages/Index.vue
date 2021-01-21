<template>
    <div>
        <Header></Header>
        <div class="landing-page">
            <div class="splash-logo">
                <SplashLogo></SplashLogo>
            </div>
            <div class="api-boxes">
                <g-link v-for="api in apis" :to="api.url" class="api-box">
                    <div class="api-icon-wrap">
                        <component :is="api.icon"></component>
                    </div>
                    <div class="title-and-text">
                        <h2 class="title">{{api.title}}</h2>
                        <p>{{api.text}}</p>
                    </div>
                    <b-icon icon="arrow-right" size="is-large" type="is-primary"></b-icon>
                </g-link>
            </div>
        </div>
    </div>
</template>
<script>
    import IntroIcon from "~/assets/images/introduction-icon.svg";
    import EventsIcon from "~/assets/images/events-icon.svg";
    import SmsIcon from "~/assets/images/sms-icon.svg";
    import MmsIcon from "~/assets/images/mms-icon.svg";
    import UsertokensIcon from "~/assets/images/usertokens-icon.svg";
    import VoicemailIcon from "~/assets/images/voicemail-icon.svg";
    import SubscriptionProfileIcon from "~/assets/images/subscription-profile-icon.svg";
    import MetricsIcon from "~/assets/images/metrics-icon.svg";
    import AuthIcon from "~/assets/images/id-auth-icon.svg";
    import SplashLogo from "~/assets/images/logo-splash.svg";

    export default {
        metaInfo: {
            title: 'WGTWO API documentation',
            titleTemplate: null
        },
        components: {
            IntroIcon,
            EventsIcon,
            SmsIcon,
            MmsIcon,
            UsertokensIcon,
            VoicemailIcon,
            SubscriptionProfileIcon,
            MetricsIcon,
            AuthIcon,
            SplashLogo,
        },
        data: () => ({
            apis: [
                {
                    icon: "IntroIcon",
                    title: "Getting started",
                    text: "Learn about how our APIs are structured, how to get credentials, etc.",
                    url: "/introduction/overview/introduction/"
                },
                {
                    icon: "EventsIcon",
                    title: "Events",
                    text: "Get events for anything happening in the network",
                    url: "/events/how-to/listen-for-events/"
                },
                {
                    icon: "SmsIcon",
                    title: "SMS",
                    text: "Send SMS to or from anyone on your platform.",
                    url: "/sms/how-to/send-sms/"
                },
                {
                    icon: "MmsIcon",
                    title: "MMS",
                    text: "Send SMS to or from anyone on your platform.",
                    url: "/mms/how-to/send-mms/",
                },
                {
                    icon: "VoicemailIcon",
                    title: "Voicemail",
                    text: "Access a subscribers Voicemail inbox, including the audio files.",
                    url: "/voicemail/how-to/list-and-play-voicemails/"
                },
                {
                    icon: "SubscriptionProfileIcon",
                    title: "Subscription Profile",
                    text: "Manage your subscribers's profiles. Enable/disable calls, SMS, etc.",
                    url: "/subscription-profile/how-to/manage-subscriptions/"
                },
                {
                    icon: "MetricsIcon",
                    title: "Metrics",
                    text: "Access relevant OpenMetrics time series directly from our systems.",
                    url: "/metrics/how-to/accessing-metrics/"
                },
                {
                    icon: "AuthIcon",
                    title: "Authorization",
                    text: "We support authorization for operators and third party developers.",
                    url: "/auth/overview/overview/"
                },
                //{icon: "UsertokensIcon", title: "User Tokens", text: "Create API tokens on behalf of subscribers", url: "/usertokens/how-to/manage-user-tokens/"},
            ]
        }),
    }
</script>

<style scoped>
    .landing-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 24px;
    }

    .splash-logo {
        padding: 56px;
    }

    .splash-logo svg {
        max-width: 196px;
        display: block;
        margin: 0 auto;
    }

    h1.title,
    h2.title {
        font-family: "Oxanium", sans-serif;
        color: var(--primary);
        margin: 8px 0 !important;
    }

    .api-box {
        width: 100%;
        margin: 24px 0;
        display: flex;
        align-items: center;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        padding: 16px;
        color: rgba(0, 0, 0, 0.67);
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
</style>
