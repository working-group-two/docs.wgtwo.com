<template>
    <div>
        <Header></Header>
        <div class="landing-page">
            <div class="splash-logo">
                <SplashLogo></SplashLogo>
            </div>
            <h1 class="title">API documentation</h1>
            <div class="api-boxes">
                <g-link to="/introduction/overview/introduction/" class="api-box">
                    <div class="api-icon-wrap">
                        <IntroIcon></IntroIcon>
                    </div>
                    <h2 class="title">Getting started</h2>
                    <p>
                        Learn about how our APIs are structured, how to get credentials, etc.
                    </p>
                </g-link>
                <g-link to="/events/how-to/listen-for-events/" class="api-box">
                    <div class="api-icon-wrap">
                        <EventsIcon></EventsIcon>
                    </div>
                    <h2 class="title">Events</h2>
                    <p>
                        Get events for anything happening in the network.
                    </p>
                </g-link>
                <g-link to="/metrics/how-to/accessing-metrics/" class="api-box">
                    <div class="api-icon-wrap">
                        <MetricsIcon></MetricsIcon>
                    </div>
                    <h2 class="title">Metrics</h2>
                    <p>
                        Access relevant OpenMetrics time series directly from our systems.
                    </p>
                </g-link>
                <g-link to="/sms/how-to/send-sms/" class="api-box">
                    <div class="api-icon-wrap">
                        <SmsIcon></SmsIcon>
                    </div>
                    <h2 class="title">Send SMS</h2>
                    <p>
                        Send SMS to or from anyone on your platform.
                    </p>
                </g-link>
                <g-link to="/mms/how-to/send-mms/" class="api-box">
                    <div class="api-icon-wrap">
                        <MmsIcon></MmsIcon>
                    </div>
                    <h2 class="title">Send MMS</h2>
                    <p>
                        Send MMS to or from anyone on your platform.
                    </p>
                </g-link>
                <g-link to="/subscription-profile/how-to/manage-subscriptions/" class="api-box">
                    <div class="api-icon-wrap">
                        <SubscriptionProfileIcon></SubscriptionProfileIcon>
                    </div>
                    <h2 class="title">Subscription Profile</h2>
                    <p>
                        Manage your subscribers's profiles.
                        Enable/disable calls, SMS, etc.
                    </p>
                </g-link>
<!--                <g-link to="/usertokens/how-to/manage-user-tokens/" class="api-box">-->
<!--                    <div class="api-icon-wrap">-->
<!--                        <UsertokensIcon></UsertokensIcon>-->
<!--                    </div>-->
<!--                    <h2 class="title">User tokens</h2>-->
<!--                    <p>-->
<!--                        Our Events User token API lets you create API tokens on behalf of-->
<!--                        your users, so they can get access to program their own subscription.-->
<!--                    </p>-->
<!--                </g-link>-->
                <g-link to="/voicemail/how-to/list-and-play-voicemails/" class="api-box">
                    <div class="api-icon-wrap">
                        <VoicemailIcon></VoicemailIcon>
                    </div>
                    <h2 class="title">Voicemail</h2>
                    <p>
                        Access a subscribers Voicemail inbox,
                        including the audio files.
                    </p>
                </g-link>
                <g-link to="/auth/overview/overview/" class="api-box">
                    <div class="api-icon-wrap">
                        <AuthIcon></AuthIcon>
                    </div>
                    <h2 class="title">Authorization</h2>
                    <p>
                        We support authorization for operators and third party developers.
                    </p>
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
            title: 'WGTWO API docs',
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
        }
    }
</script>

<style scoped>

    .landing-page {
        max-width: 1200px;
        margin: 64px auto 24px auto;
        padding: 24px;
    }

    .splash-logo svg {
        max-width: 196px;
        display: block;
        margin: 0 auto 48px;
    }

    h1.title {
        text-align: center;
    }

    h1.title,
    h2.title {
        font-family: "Oxanium", sans-serif;
        color: var(--primary);
        margin: 16px 0 !important;
    }

    .api-boxes {
        text-align: center;
        margin-top: 56px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .api-box {
        width: 100%;
        margin: 32px 0;
    }

    .api-box p {
        color: rgba(0, 0, 0, 0.67);
    }

    .api-box .api-icon-wrap {
        height: 65px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .api-icon-wrap svg {
        max-height: 100%;
    }

    @media screen and (min-width: 769px) {
        .api-box {
            width: 29%;
            margin: 32px 2%;
            text-align: left;
        }

        .api-box .api-icon-wrap {
            width: 100px;
        }
    }
</style>
