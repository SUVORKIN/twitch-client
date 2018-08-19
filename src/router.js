import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from './components/game.vue'
import streamPage from './components/streamPage.vue'
import NotFound from './components/notFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:name',
      name: 'game',
      component: Game
    },
    {
      path: '/:game/:channel',
      name: 'stream',
      component: streamPage
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
