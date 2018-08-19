<template>
  <div class="stream-page">
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
</template>

<script>

export default {
  name: 'streamPage'
}
</script>

<style scoped>
.stream-page {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
