<template>
  <div>
    <div class="load-spinner" v-if="$store.state.loading">
      <atom-spinner
      :animation-duration="1000"
      :size="60"
      :color="'rgb(100, 69, 155)'"
      />
    </div>
    <div class="stream-page" v-if="isStream">
      <iframe
      class="iframe-video"
      :src="'http://player.twitch.tv/?channel=' + $route.params.channel"
      height="600"
      width="855"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true">
    </iframe>
    <iframe
      class="iframe-chat"
      frameborder="0"
      scrolling="no"
      id="chat_embed"
      :src="'http://www.twitch.tv/embed/' + $route.params.channel + '/chat'"
      height="600"
      width="350">
    </iframe>
    </div>
    <div v-else class="error">
      <p>Stream not found</p>
      <router-link to="/"> Go Home</router-link>
    </div>
  </div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'

export default {
  name: 'streamPage',
  created () {
    this.$store.dispatch('getStream', this.$route.params.channel)
  },
  computed: {
    isStream () {
      return this.$store.state.isStream
    }
  },
  watch: {
    $route () {
      this.$store.dispatch('getStream', this.$route.params.channel)
    }
  },
  components: {
    AtomSpinner
  }
}
</script>

<style scoped>
.stream-page {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>
