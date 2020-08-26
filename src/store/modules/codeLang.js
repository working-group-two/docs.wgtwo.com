const state = () => ({
  codeLangIndex: 0,
})

const getters = {
}

const actions = {
}

const mutations = {
  setCodeLangIndex(state, codeLangIndex) {
    state.codeLangIndex = codeLangIndex
    localStorage.setItem("CODE_LANG_INDEX", codeLangIndex);
  },
  initialiseCodeLang(state) {
    if (typeof window === `undefined`) return "";
    if (localStorage.getItem("CODE_LANG_INDEX")) {
      state.codeLangIndex = parseInt(localStorage.getItem("CODE_LANG_INDEX"))
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
