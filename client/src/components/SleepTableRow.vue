<template>
  <tr>
    <td>{{ dateStr }}</td>
    <td>{{ duration }}</td>
    <td>{{ startStr }}</td>
    <td>{{ endStr }}</td>
  </tr>
</template>
<script>
export default {
  props: ["json"],
  computed: {
    dateStr() {
      return this.json.date.toFormat("yyyy-mm-dd");
    },
    duration() {
      return this.json.duration.toFormat("h:m");
    },
    startStr() {
      return this.json.startTime.toFormat("hh:mm");
    },
    endStr() {
      return this.json.endTime.toFormat("hh:mm");
    }
  }
};
</script>
