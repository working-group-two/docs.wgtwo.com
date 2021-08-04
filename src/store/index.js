import Vue from 'vue'
import Vuex from 'vuex'
import role from './modules/role'
import codeLang from './modules/codeLang'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        role,
        codeLang,
    }
})
