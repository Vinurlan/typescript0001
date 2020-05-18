import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: []
  },
  mutations: {
    setUsersList(state, data) {
      state.usersList = data
    }
  },
  actions: {
    async getUserForId({commit}, id) {
      try {
        await fetch(`http://localhost:3001/user/${id}`)
          .then(res => res.json())
          .then(data => {
            commit('setUsersList', data)
          })
      } catch(err) {
        console.error(err)
      }
    }
  },
  modules: {
  }
})
