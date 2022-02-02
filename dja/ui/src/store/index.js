import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access: '',
    refresh: ''
  },
  mutations: {
    initializeCookie(state) {
      if (this.$cookie.get('access')) {
        state.access = this.$cookie.get('access')
        state.access = this.$cookie.get('refresh')
      } else {
        state.access = ''
        state.refresh = ''
      }
    },

    setAccess(state, access) {
      state.access = access
    },

    setRefresh(state, refresh) {
      state.refresh = refresh
    }

  },
  actions: {
    
  },
  modules: {
  }
})
