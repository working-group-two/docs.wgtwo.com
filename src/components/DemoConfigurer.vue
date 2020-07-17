<template>
    <div>
        <h3>Snippet config</h3>
        <b-notification
            type="is-warning"
            aria-close-label="Close notification"
            role="alert"
            :closable="false"
            >
            API is not available for operator role.
        </b-notification>
        <div class="demo-config">
            <b-tabs v-model="activeTab">
                <b-tab-item label="Third party dev">
                    <p>
                        Enter your <g-link to="/we-need-to-create-this-article-on-how-to-use-oauth">access_token</g-link>, and it will be injected into the code examples below.
                    </p>
                    <b-field label="access_token" label-position="inside">
                        <b-input v-model="accessToken" placeholder="ex: c2FkZmtsc2FkamZsa2phc2Rsa2ZqYXNkZ"></b-input>
                    </b-field>
                </b-tab-item>

                <b-tab-item label="Operator">
                    <p>
                        Enter your Client ID and Secret from <a href="https://console.wgtwo.com/api-keys-redirect">Console</a> here, and they will be injected into the code examples below.
                    </p>
                    <div class="half-flex">
                        <b-field label="Client ID" label-position="inside">
                            <b-input v-model="clientId" placeholder="ex: c2FkZmtsc2FkamZsa2phc2Rsa2ZqYXNkZ"></b-input>
                        </b-field>
                        <b-field label="Client Secret" label-position="inside">
                            <b-input v-model="clientSecret" placeholder="ex: czEyNGRma2xzMTI0YWRqZmxrajEyNGFzZGxrMTI0MTI0Zmphc2Rm"></b-input>
                        </b-field>
                    </div>
                </b-tab-item>

                <b-tab-item label="Subscriber" :visible="true">
                    <b-notification
                        type="is-danger"
                        aria-close-label="Close notification"
                        role="alert"
                        :closable="false"
                        >
                        Subscriber based tokens is not officially supported yet, and may not work.
                    </b-notification>
                    <p>
                        Enter your <g-link to="/usertokens/how-to/manage-user-tokens/">user token</g-link>, and it will be injected into the code examples below.
                    </p>
                    <b-field label="User token" label-position="inside">
                        <b-input v-model="userToken" placeholder="ex: wg2:c2FkZmtsc2FkamZsa2phc2Rsa2ZqYXNkZ"></b-input>
                    </b-field>
                </b-tab-item>
            </b-tabs>
            Credentials will be cleared when you close the page.
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            clientId: "",
            clientSecret: "",
            accessToken: "",
            userToken: "",
            activeTab: 0,
            roleByIndex: ["THIRD_PARTY_DEV", "OPERATOR", "SUBSCRIBER"],
        }),
        watch: {
            clientId: function () {
                this.updateConfig();
            },
            clientSecret: function () {
                this.updateConfig();
            },
            accessToken: function () {
                this.updateConfig();
            },
            userToken: function () {
                this.updateConfig();
            },
            activeTab: function () {
                this.updateAuthInSnippets();
            },
        },
        methods: {
            updateConfig() {
                if (typeof window === `undefined`) return;
                sessionStorage.setItem("CLIENT_ID", this.clientId);
                sessionStorage.setItem("CLIENT_SECRET", this.clientSecret);
                if (sessionStorage.getItem("CLIENT_ID") && sessionStorage.getItem("CLIENT_SECRET")) {
                    sessionStorage.setItem("OPERATOR_TOKEN", btoa(this.clientId + ":" + this.clientSecret));
                } else {
                    sessionStorage.setItem("OPERATOR_TOKEN", "");
                }
                sessionStorage.setItem("ACCESS_TOKEN", this.accessToken);
                sessionStorage.setItem("USER_TOKEN", this.userToken);
            },
            updateAuthInSnippets() {
                window.selectedRoleSnippet = this.selectedRoleSnippet;
            }
        },
        computed: {
            selectedRoleSnippet() {
                return this.roleByIndex[this.activeTab];
            },
        },
        created() {
            if (typeof window === `undefined`) return;
            if (sessionStorage.getItem("CLIENT_ID")) {
                this.clientId = sessionStorage.getItem("CLIENT_ID");
            }
            if (sessionStorage.getItem("CLIENT_SECRET")) {
                this.clientSecret = sessionStorage.getItem("CLIENT_SECRET");
            }
            if (sessionStorage.getItem("ACCESS_TOKEN")) {
                this.clientSecret = sessionStorage.getItem("ACCESS_TOKEN");
            }
            if (sessionStorage.getItem("USER_TOKEN")) {
                this.clientSecret = sessionStorage.getItem("USER_TOKEN");
            }
            this.updateAuthInSnippets();
        }
    };
</script>
<style scoped>
    h3:before {
        content: "";
        width: 16px;
        height: 16px;
        background: var(--info);
        display: inline-block;
        border-radius: 8px;
        margin-right: 8px;
    }

    .demo-config {
        border: 1px solid rgba(0, 0, 0, 0.15);
        padding: 16px 16px 8px 16px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.01);
        margin-bottom: 16px;
    }

    .half-flex {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
    }

    .half-flex > * {
        width: calc(50% - 8px);
    }
</style>
<style>
    .demo-config ul {
        margin: 0;
    }
</style>
