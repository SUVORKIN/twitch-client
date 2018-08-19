import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topGames: null,
    streams: null,
    loading: false,
    error: false
  },
  mutations: {
    set (state, {type, items}) {
      state[type] = items
    }
  },
  actions: {
    getTopGames ({commit}) {
      this.state.loading = true
      const url = 'https://api.twitch.tv/kraken/games/top?client_id=hx1afwpum43ryzd11oq6r0dh8msk38'
      jsonp(url, (error, response) => {
        if (error) {
          throw error
        }
        const topGames = response
        commit('set', {type: 'topGames', items: topGames})
        this.state.loading = false
      })
    },
    getStreams ({commit}, game) {
      this.state.loading = true
      const url = 'https://api.twitch.tv/kraken/streams/?client_id=hx1afwpum43ryzd11oq6r0dh8msk38&game=' + game
      jsonp(url, (error, response) => {
        if (error) {
          throw error
        }
        const streams = response
        commit('set', {type: 'streams', items: streams})
        this.state.loading = false
        this.state.error = false
      })
    }
  }
})
