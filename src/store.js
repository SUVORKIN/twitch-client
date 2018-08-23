import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topGames: null,
    streams: null,
    isStream: true,
    loading: false,
    error: false
  },
  mutations: {
    set (state, {type, item}) {
      state[type] = item
    }
  },
  actions: {
    getTopGames ({commit}) {
      commit('set', {type: 'loading', item: true})
      const url = 'https://api.twitch.tv/kraken/games/top?client_id=hx1afwpum43ryzd11oq6r0dh8msk38'
      jsonp(url, (error, response) => {
        if (error) {
          throw error
        }
        const topGames = response
        commit('set', {type: 'topGames', item: topGames})
        commit('set', {type: 'loading', item: false})
      })
    },
    getStreams ({commit}, game) {
      commit('set', {type: 'loading', item: true})
      const url = 'https://api.twitch.tv/kraken/streams/?client_id=hx1afwpum43ryzd11oq6r0dh8msk38&game=' + game
      jsonp(url, (error, response) => {
        if (error) {
          throw error
        }
        const streams = response
        commit('set', {type: 'streams', item: streams})
        commit('set', {type: 'loading', item: false})
        commit('set', {type: 'error', item: false})
      })
    },
    getStream ({commit}, channel) {
      commit('set', {type: 'loading', item: true})
      const url = 'https://api.twitch.tv/kraken/streams/?client_id=hx1afwpum43ryzd11oq6r0dh8msk38&channel=' + channel
      jsonp(url, (error, response) => {
        if (error) {
          throw error
        }
        if (response.streams.length) {
          commit('set', {type: 'isStream', item: true})
          commit('set', {type: 'loading', item: false})
        } else {
          commit('set', {type: 'isStream', item: false})
          commit('set', {type: 'loading', item: false})
        }
      })
    }
  }
})
