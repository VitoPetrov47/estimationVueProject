import { createStore } from 'vuex'
import auth from './auth'
import record from './record'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    setError(state, error) {
      state.error = error; // Определите мутацию setError
    },
  },
  actions: {
  },
  modules: {
    auth, record,
  }
})
