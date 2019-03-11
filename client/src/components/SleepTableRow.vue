<template>
  <tr class="sleep-table-row" :class="isToday && 'today'">
    <td>{{ dateStr }}</td>
    <td>{{ duration }}</td>
    <td>{{ startStr }}</td>
    <td>{{ endStr }}</td>
  </tr>
</template>
<script>
import { DateTime } from "luxon";
export default {
  props: ["json"],
  computed: {
    isToday() {
      const today = DateTime.local();
      const diff = today.diff(this.json.date, "days");
      return diff.days < 1;
    },

    dateStr() {
      return this.json.date.toFormat("yyyy-MM-dd");
    },
    duration() {
      return this.json.duration.toFormat("h時間mm分");
    },
    startStr() {
      return this.json.startTime.toFormat("HH:mm");
    },
    endStr() {
      return this.json.endTime.toFormat("HH:mm");
    }
  }
};
</script>
<style>
.today {
  background: lightyellow;
}
</style>
