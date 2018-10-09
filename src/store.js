import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter () {
      return this.state.counter * 2
    },
  },
  mutations: {
  },
  actions: {
  },
})
