<template>
  <nav class="topMenu">
    <router-link to="/">
        <img src="@/assets/logoTwitch.png" width="30" alt="">
    </router-link>
    <router-link to="/">Home</router-link>
  </nav>
</template>

<script>
export default {
  name: 'topMenu'
}
</script>
<style>
.topMenu {
  display: flex;
  align-items: center;
  background-color: rgb(100, 69, 155);
  color: #fff;
}
.topMenu a {
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  color: #fff;
}
.topMenu a.router-link-exact-active {
  text-decoration: underline;
  cursor: default;
}
</style>
