<template>
<div class="game">
  <div class="load-spinner" v-if="$store.state.loading">
    <atom-spinner
    :animation-duration="1000"
    :size="60"
    :color="'rgb(100, 69, 155)'"
     />
  </div>
  <div v-if="data.streams.length > 0 && !$store.state.loading">
    <h1>{{data.streams[0].game}}</h1>
    <div class="game__streams">
      <router-link :to="stream.game + '/' + stream.channel.name"
        class="game__stream-link"
        v-for="stream in data.streams" :key="stream.id">
          <img class="game__stream-preview" :src="stream.preview.medium" alt="">
          <div class="game__stream-info">
            <img class="game__channel-logo" :src="stream.channel.logo" alt="" width="30" height="30">
            <div class="game__stream-viewers">
              {{stream.viewers}} viewers
            </div>
            <div class="game__stream-status">
              {{stream.channel.status}}
              <div class="game__channel-name">
                {{stream.channel.name}}
              </div>
            </div>
          </div>
      </router-link>
    </div>
  </div>
  <div class="error" v-else-if="!$store.state.loading">
   <p>Game not found</p>
   <router-link to="/"> Go Home</router-link>
  </div>
</div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'

export default {
  name: 'game',
  computed: {
    data () {
      if (this.$store.state.streams) {
        return this.$store.state.streams
      }
    }
  },
  beforeCreate () {
    this.$store.dispatch('getStreams', this.$route.params.name)
  },
  components: {
    AtomSpinner
  }
}
</script>

<style scoped>
.game {
  padding: 0 10px;
  text-align: center;
}
.game__streams {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.game__stream-link {
  position: relative;
  margin: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 350px;
}
.game__stream-viewers {
  position: absolute;
  top: 0px;
  left: 0px;
  color: #fff;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.445);
  padding: 5px;
}
.game__stream-info {
  line-height: 1;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.game__stream-preview {
  width: 350px;
}
.game__stream-status {
  width: 310px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  padding-left: 8px;
}
.game__channel-name {
  width: 100%;
  font-size: 12px;
}
</style>
