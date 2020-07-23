<template>
    <div>
        <h3>Snippet config</h3>
        <b-notification
            type="is-warning"
            aria-close-label="Close notification"
            role="alert"
            :closable="false"
            v-if="value.role !== '' && !availableRoles.has(value.role)"
            >
            API is not available for {{ roleName }}.
        </b-notification>
        <div class="demo-config">
            <b-tabs v-model="value.activeRoleTab">
                <b-tab-item label="Third party developer" :visible="availableRoles.has('THIRD_PARTY_DEVELOPER')" :key="0">
                    <p>
                        Enter your <g-link to="/introduction/how-to/authorization/">access_token</g-link>, and it will be injected into the code examples below.
                    </p>
                    <b-field label="access_token" label-position="inside">
                        <b-input v-model="value.accessToken" placeholder="ex: c2FkZmtsc2FkamZsa2phc2Rsa2ZqYXNkZ"></b-input>
                    </b-field>
                </b-tab-item>

                <b-tab-item label="Operator" :visible="availableRoles.has('OPERATOR')" :key="1">
                    <p>
                        Enter your Client ID and Secret from <a href="https://console.wgtwo.com/api-keys-redirect">Console</a> here, and they will be injected into the code examples below.
                        Remember to set the appropriate rights for the client.
                    </p>
                    <div class="half-flex">
                        <b-field label="Client ID" label-position="inside" >
                            <b-input v-model="value.clientId" placeholder="ex: c2FkZmtsc2FkamZsa2phc2Rsa2ZqYXNkZ"></b-input>
                        </b-field>
                        <b-field label="Client Secret" label-position="inside" >
                            <b-input v-model="value.clientSecret" placeholder="ex: czEyNGRma2xzMTI0YWRqZmxrajEyNGFzZGxrMTI0MTI0Zmphc2Rm"></b-input>
                        </b-field>
                    </div>
                </b-tab-item>

                <b-tab-item label="Subscriber" :visible="availableRoles.has('SUBSCRIBER')" :key="2">
                    <b-notification
                        type="is-danger"
                        aria-close-label="Close notification"
                        role="alert"
                        :closable="false"
                        >
                        Subscriber based tokens is not officially supported yet, and may not work.
                    </b-notification>
                    <p>
                        Enter your <g-link to="/introduction/how-to/authorization/">user token</g-link>, and it will be injected into the code examples below.
                    </p>
                    <b-field label="User token" label-position="inside" >
                        <b-input v-model="value.userToken" placeholder="ex: wg2:c2FkZmtsc2FkamZsa2phc2Rsa2ZqYXNkZ"></b-input>
                    </b-field>
                </b-tab-item>
            </b-tabs>
            Credentials will be cleared when you close the page.
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: Object,
        availableRoles: Set,
    },
    data() {
        return {
            roleNames: {
                "THIRD_PARTY_DEVELOPER": "Third party developer",
                "OPERATOR": "Operator",
                "SUBSCRIBER": "Subscriber",
            }
        }
    },
    computed: {
        roleName() {
            return this.roleNames[this.value.role];
        }
    },
}
</script>
<style scoped>
    h3:before {
        content: "";
        width: 16px;
        height: 16px;
        background: var(--snippet);
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
