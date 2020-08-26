const credentials = {
    clientId: "CLIENT_ID",
    clientSecret: "CLIENT_SECRET",
    accessToken: "ACCESS_TOKEN",
    userToken: "USER_TOKEN",
}

const state = () => ({
    ...credentials,
})

const getters = {
    operatorToken(state) {
        if (typeof window === `undefined`) return "";
        return state.clientId && state.clientSecret
            ? btoa(state.clientId + ":" + state.clientSecret)
            : "";
    },
}

const actions = {
}

const mutations = {
    setCredential(state, { type, value }) {
        state[type] = value
        sessionStorage.setItem(credentials[type], value)
    },
    initialiseCredentials(state) {
        if (typeof window === `undefined`) return;
        if (sessionStorage.getItem("CLIENT_ID")) {
            state.clientId = sessionStorage.getItem("CLIENT_ID");
        }
        if (sessionStorage.getItem("CLIENT_SECRET")) {
            state.clientSecret = sessionStorage.getItem("CLIENT_SECRET");
        }
        if (sessionStorage.getItem("ACCESS_TOKEN")) {
            state.accessToken = sessionStorage.getItem("ACCESS_TOKEN");
        }
        if (sessionStorage.getItem("USER_TOKEN")) {
            state.userToken = sessionStorage.getItem("USER_TOKEN");
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
