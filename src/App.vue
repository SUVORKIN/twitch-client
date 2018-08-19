<template>
  <div id="app">
    <topMenu/>
    <router-view/>
  </div>
</template>

<script>
import topMenu from '@/components/topMenu.vue'

export default {
  name: 'app',
  components: {
    topMenu
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app h1{
  text-align: center;
}
a {
  text-decoration: none;
  color: #000;
}
.load-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
}
.error {
  margin: 30px;
  font-size: 20px;
  font-weight: bold;
}
.error a {
  color: rgb(47, 9, 172);
}
</style>
