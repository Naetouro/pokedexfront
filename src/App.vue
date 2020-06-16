<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/unique/TheMenu";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style>
#app {
  background-color: lightskyblue;
}
</style>
