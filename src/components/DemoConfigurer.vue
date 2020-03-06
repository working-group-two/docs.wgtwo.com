<template>
    <div>
        <h3>Snippet config</h3>
        <div class="demo-config">
            You can enter your Client ID and Secret from Console here, and they will be injected into the code examples below.
            <div class="half-flex">
                <b-field label="Client ID" label-position="inside">
                    <b-input v-model="clientId" placeholder="ex: c2FkZmtsc2FkamZsa2phc2Rsa2ZqYXNkZ"></b-input>
                </b-field>
                <b-field label="Client Secret" label-position="inside">
                    <b-input v-model="clientSecret" placeholder="ex: czEyNGRma2xzMTI0YWRqZmxrajEyNGFzZGxrMTI0MTI0Zmphc2Rm"></b-input>
                </b-field>
            </div>
            Your credentials will be cleared when you close the page.
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            clientId: "",
            clientSecret: "",
        }),
        watch: {
            clientId: function (newValue) {
                this.updateConfig();
            },
            clientSecret: function (newValue) {
                this.updateConfig();
            },
        },
        methods: {
            updateConfig() {
                sessionStorage.setItem("CLIENT_ID", this.clientId);
                sessionStorage.setItem("CLIENT_SECRET", this.clientSecret);
                if (sessionStorage.getItem("CLIENT_ID") && sessionStorage.getItem("CLIENT_SECRET")) {
                    sessionStorage.setItem("OPERATOR_TOKEN", btoa(this.clientId + ":" + this.clientSecret));
                } else {
                    sessionStorage.setItem("OPERATOR_TOKEN", "");
                }

            }
        },
        created() {
            if (sessionStorage.getItem("CLIENT_ID")) {
                this.clientId = sessionStorage.getItem("CLIENT_ID");
            }
            if (sessionStorage.getItem("CLIENT_SECRET")) {
                this.clientSecret = sessionStorage.getItem("CLIENT_SECRET");
            }
        }
    };
</script>
<style scoped>
    h3:before {
        content: "";
        width: 16px;
        height: 16px;
        background: orange;
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
