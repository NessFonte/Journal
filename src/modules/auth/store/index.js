import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import state from './state.js'

const authModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state,
} 

export default authModule
