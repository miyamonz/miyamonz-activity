<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <table>
        <tr>
          <td>date</td>
          <td>時間</td>
          <td>start</td>
          <td>end</td>
        </tr>
        <SleepTableRow v-for="s in sleep" :key="s.dateOfSleep" :json="s" />
      </table>
    </div>
  </div>
</template>
<script>
import SleepTableRow from "./components/SleepTableRow.vue";
import fitbit from "./store.js";
import { sleepMap } from "./util.js";
export default {
  name: "app",
  components: { SleepTableRow },
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
  margin-top: 60px;
}
</style>
