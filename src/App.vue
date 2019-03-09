<template>
  <div id="app">
    <b-navbar type="dark" variant="primary" :sticky="true">
      <b-navbar-brand :to="{ name: 'home'}">
        Github Projects
      </b-navbar-brand>
    </b-navbar>
    <div class="container my-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
