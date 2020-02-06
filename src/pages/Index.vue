<template>
    <DefaultLayout>
        <h1 class="title">Working Group Two API docs</h1>
        <div class="api-boxes">
            <g-link to="/sms/how-to/send-sms/" class="api-box">
                <div class="api-icon-wrap">
                    <SmsIcon></SmsIcon>
                </div>
                <h2 class="title">Send & receive SMS</h2>
                <p>
                    Send SMS to or from anyone on your platform.
                    Receive SMS coming in or going out of your platform.
                </p>
            </g-link>
            <g-link to="/voicemail/how-to/list-and-play-voicemails/" class="api-box">
                <div class="api-icon-wrap">
                    <VocemailIcon></VocemailIcon>
                </div>
                <h2 class="title">Voicemail</h2>
                <p>
                    Our Voicemail API enables you to fetch a list of all voicemails for
                    a user, or fetch the audio file for one particular Voicemail.
                </p>
            </g-link>
            <g-link to="/events/how-to/events/" class="api-box">
                <div class="api-icon-wrap">
                    <EventsIcon></EventsIcon>
                </div>
                <h2 class="title">Events</h2>
                <p>
                    Our Events API lets you listen to all sort of events occurring in
                    the network. Voice events, Voicemail events, Roaming events, etc.
                </p>
            </g-link>
            <g-link to="/usertokens/how-to/manage-user-tokens/" class="api-box">
                <div class="api-icon-wrap">
                    <UsertokensIcon></UsertokensIcon>
                </div>
                <h2 class="title">User tokens</h2>
                <p>
                    Our Events User token API lets you create API tokens on behalf of
                    your users, so they can get access to program their own subscription.
                </p>
            </g-link>
        </div>
    </DefaultLayout>
</template>
<script>
    import EventsIcon from "~/assets/images/events-icon.svg";
    import SmsIcon from "~/assets/images/sms-icon.svg";
    import UsertokensIcon from "~/assets/images/usertokens-icon.svg";
    import VocemailIcon from "~/assets/images/voicemail-icon.svg";

    export default {
        metaInfo: {
            title: 'WGTWO API docs',
            titleTemplate: null
        },
        components: {
            EventsIcon,
            SmsIcon,
            UsertokensIcon,
            VocemailIcon
        }
    }
</script>

<style scoped>
    h1.title {
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', sans-serif;
        color: rgba(0, 0, 0, 0.5);
        margin: 16px 0 !important;
    }

    .api-boxes {
        text-align: center;
        margin-top: 96px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .api-box {
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
            width: 45%;
            text-align: left;
        }
        .api-box .api-icon-wrap {
            width: 100px;
        }
    }
</style>
