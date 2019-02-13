<template>
  <div id="app">
    <kepala></kepala>
    <badan></badan>
  </div>
</template>

<script>
import kepala from "./components/kepala.vue";
import badan from "./components/badan.vue";

export default {
  name: "app",
  components: {
    kepala,
    badan
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
