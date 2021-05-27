const roleByIndex = ["THIRD_PARTY_DEVELOPER", "OPERATOR", "SUBSCRIBER"]
const roleNames = {
  THIRD_PARTY_DEVELOPER: "Third party developer",
  OPERATOR: "Operator",
  // SUBSCRIBER: "Subscriber",
}

const state = () => ({
  activeRoleTab: 0,
  availableRoles: new Set(["OPERATOR"]),
  isRoleModalActive: false,
  role: "",
  hasRoleChoiceBeenGiven: false,
})

const getters = {
  roleButtonText({ role }) {
    if (role === "THIRD_PARTY_DEVELOPER") {
      return "Subscriber products";
    } else if (role === "OPERATOR") {
      return "Telecom operator products";
    }
    return "Any type of product";
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
  roleByActiveTab({ activeRoleTab }) {
    return roleByIndex[activeRoleTab];
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
  initialiseRoles({ commit, state }) {
    if (typeof window === `undefined`) return;

    if (localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN") && localStorage.getItem("ROLE")) {
      state.role = localStorage.getItem("ROLE");
    }
    if (localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN")) {
      state.hasRoleChoiceBeenGiven = localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN");
    }
    commit('setActiveTabBasedOnSelectedRole')
  },
}

const mutations = {
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
