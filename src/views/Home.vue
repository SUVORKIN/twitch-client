<template>
  <div class="home">
    <h1>Twitch client</h1>
    <games-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import gamesList from '@/components/gamesList.vue'

export default {
  name: 'home',
  components: {
    gamesList
  }
}
</script>
