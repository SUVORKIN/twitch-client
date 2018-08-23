<template>
  <div class="games-list">
    <div class="load-spinner" v-if="$store.state.loading">
      <atom-spinner
      :animation-duration="1000"
      :size="60"
      :color="'rgb(100, 69, 155)'"
      />
    </div>
    <router-link
      v-if="!$store.state.loading"
      :to="item.game.name"
      class="games-list__item" v-for="item in data" :key="item._id">
      <div class="games-list__viewers">
        {{item.viewers}} viewers
      </div>
      <img :src="item.game.box.large" alt="">
    </router-link>
  </div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'
export default {
  name: 'gamesList',
  computed: {
    data () {
      if (this.$store.state.topGames) {
        return this.$store.state.topGames.top
      }
    }
  },
  beforeCreate () {
    this.$store.dispatch('getTopGames')
  },
  components: {
    AtomSpinner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.games-list {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.games-list__item {
  border-radius: 6px;
  margin: 5px;
  width: 275px;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.games-list__item:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.games-list__item img {
  width: 100%;
}
.games-list__viewers {
  color: #fff;
  padding: 7px 0;
  font-weight: bold;
  text-align: center;
  background-color: #2b3e50;
}
</style>
