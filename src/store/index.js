
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import codeLang from './modules/codeLang'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        codeLang,
    }
})
