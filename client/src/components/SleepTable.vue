<template>
  <table class="sleep-table">
    <tr>
      <td>date</td>
      <td>時間</td>
      <td>start</td>
      <td>end</td>
    </tr>
    <SleepTableRow v-for="s in array" :key="s.dateOfSleep" :json="s" />
  </table>
</template>
<script>
import SleepTableRow from "./SleepTableRow.vue";
export default {
  props: ["array"],
  components: { SleepTableRow }
};
</script>
<style>
.sleep-table * {
  border: solid 1px;
}
</style>
