const state = {
  counter: 0,
}

const getters = {
  doubleCounter (state) {
    return state.counter * 2
  },
}

const mutations = {
  increment (state) {
    state.counter += 1
  },
  decrement (state) {
    state.counter -= 1
  },
}
const actions = {
  increment ({commit}) {
    commit('increment')
  },
  decrement ({commit}) {
    commit('decrement')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
