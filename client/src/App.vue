<template>
  <div id="app">
    睡眠時間
    <div><SleepTable :array="sleep" /></div>
  </div>
</template>
<script>
import SleepTable from "./components/SleepTable.vue";
import fitbit from "./store.js";
import { sleepMap } from "./util.js";
export default {
  name: "app",
  components: { SleepTable },
  async mounted() {
    const sleep = await fitbit.fetch();
    console.log(sleep[0]);
    this.$set(this, "sleep", sleep.map(sleepMap));
  },
  data() {
    return { sleep: [] };
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
  margin-top: 10px;
}
#app div > * {
  width: 90vw;
  text-align: center;
  margin: 0 auto;
}
</style>
