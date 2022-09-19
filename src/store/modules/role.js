const roleNames = {
  THIRD_PARTY_DEVELOPER: "Third party developer",
  OPERATOR: "Operator",
};

const state = () => ({
  availableRoles: new Set(["OPERATOR"]),
  isRoleModalActive: false,
  role: "",
  hasRoleChoiceBeenGiven: false,
})

const getters = {
  roleButtonText({ role }) {
    if (role === "THIRD_PARTY_DEVELOPER") {
      return "subscriber docs";
    } else if (role === "OPERATOR") {
      return "telecom operator docs";
    }
    return "docs";
  },
  roleName({ role }) {
    return roleNames[role];
  },
}

const actions = {
  updateAvailableRoles({ commit }, roles) {
    commit('setAvailableRoles', roles)
  },
  updateRole({ commit }, role) {
    commit('setRole', role)
  },
  initialiseRoles({ state }) {
    if (typeof window === `undefined`) return;

    if (localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN") && localStorage.getItem("ROLE")) {
      state.role = localStorage.getItem("ROLE");
    }
    if (localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN")) {
      state.hasRoleChoiceBeenGiven = localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN");
    }
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
    state.availableRoles = roles.length > 0 ? new Set(roles) : new Set(["OPERATOR"]);
  },
  setRole(state, role) {
    state.role = role;
    localStorage.setItem("ROLE", role);
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
