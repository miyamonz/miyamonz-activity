<template>
  <div id="app"><img alt="Vue logo" src="./assets/logo.png" /> {{ json }}</div>
</template>
<script>
export default {
  name: "app",
  components: {},
  mounted() {
    fetch("http://localhost:3000", { mode: "cors" })
      .then(res => res.json())
      .then(json => (this.json = json));
  },
  data() {
    return {
      json: null
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
