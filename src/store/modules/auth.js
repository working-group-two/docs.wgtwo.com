const roleByIndex = ["THIRD_PARTY_DEVELOPER", "OPERATOR", "SUBSCRIBER"]
const roleNames = {
  THIRD_PARTY_DEVELOPER: "Third party developer",
  OPERATOR: "Operator",
  SUBSCRIBER: "Subscriber",
}

const state = () => ({
  clientId: "CLIENT_ID",
  clientSecret: "CLIENT_SECRET",
  accessToken: "ACCESS_TOKEN",
  userToken: "USER_TOKEN",
  activeRoleTab: 0,
  availableRoles: new Set(["OPERATOR"]),
  isRoleModalActive: false,
  role: "",
  hasRoleChoiceBeenGiven: false,
})

const getters = {
  operatorToken(state) {
    if (typeof window === `undefined`) return "";
    return state.clientId && state.clientSecret
      ? btoa(state.clientId + ":" + state.clientSecret)
      : "";
  },
  roleButtonText({ role }) {
    if (role === "THIRD_PARTY_DEVELOPER") {
      return "Developer";
    } else if (role === "OPERATOR") {
      return "Operator";
    } else if (role === "SUBSCRIBER") {
      return "Subscriber";
    }
    return "Change role";
  },
  roleName({ role }) {
    return roleNames[role];
  },
  isOperatorTabSelected({ activeRoleTab }) {
    return activeRoleTab === roleByIndex.indexOf("OPERATOR")
  },
  isThirdPartyDeveloperTabSelected({ activeRoleTab }) {
    return activeRoleTab === roleByIndex.indexOf("THIRD_PARTY_DEVELOPER")
  },
}

const actions = {
  updateAvailableRoles({ commit }, roles) {
    commit('setAvailableRoles', roles)
    commit('setActiveTabBasedOnSelectedRole')
  },
  updateRole({ commit }, role) {
    commit('setRole', role)
    commit('setActiveTabBasedOnSelectedRole')
  },
  initialiseStore({ commit, state }) {
    if (typeof window === `undefined`) return;

    if (localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN") && localStorage.getItem("ROLE")) {
      state.role = localStorage.getItem("ROLE");
    }
    if (localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN")) {
      state.hasRoleChoiceBeenGiven = localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN");
    }
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

    commit('setActiveTabBasedOnSelectedRole')
  },
}

const mutations = {
  setCredential(state, { type, value }) {
    state[type] = value
    sessionStorage.setItem(type, value)
  },
  setRoleModalActive(state, bool) {
    state.isRoleModalActive = bool;
    if (bool) {
      localStorage.setItem("HAS_ROLE_CHOICE_BEEN_GIVEN", true);
    }
  },
  setAvailableRoles(state, roles) {
    state.availableRoles = roles.length > 0 ? new Set(roles) : new Set(["OPERATOR"])
  },
  selectFirstAvailableRole(state) {
    if (state.availableRoles.has("THIRD_PARTY_DEVELOPER")) {
      state.activeRoleTab = roleByIndex.indexOf("THIRD_PARTY_DEVELOPER");
      return;
    }
    if (state.availableRoles.has("OPERATOR")) {
      state.activeRoleTab = roleByIndex.indexOf("OPERATOR");
      return;
    }
    if (state.availableRoles.has("SUBSCRIBER")) {
      state.activeRoleTab = roleByIndex.indexOf("SUBSCRIBER");
      return;
    }
    state.activeRoleTab = roleByIndex.indexOf("OPERATOR");
  },
  setRole(state, role) {
    state.role = role
    localStorage.setItem("ROLE", role);
  },
  setActiveTabBasedOnSelectedRole(state) {
    const role = state.role;
    const availableRoles = state.availableRoles;

    const roleByActiveTab = roleByIndex[state.activeRoleTab]
    if (role === "" && availableRoles.has(roleByActiveTab)) {
      return;
    }
    if (availableRoles.has(role)) {
      state.activeRoleTab = roleByIndex.indexOf(role);
      return;
    }

    if (availableRoles.has("THIRD_PARTY_DEVELOPER")) {
      state.activeRoleTab = roleByIndex.indexOf("THIRD_PARTY_DEVELOPER");
      return;
    }
    if (availableRoles.has("OPERATOR")) {
      state.activeRoleTab = roleByIndex.indexOf("OPERATOR");
      return;
    }
    if (availableRoles.has("SUBSCRIBER")) {
      state.activeRoleTab = roleByIndex.indexOf("SUBSCRIBER");
      return;
    }
    state.activeRoleTab = roleByIndex.indexOf("OPERATOR");
  },
  setActiveRoleTab(state, index) {
    state.activeRoleTab = index;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
