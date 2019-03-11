<template>
  <b-table :columns="columns" :data="bueData" :striped="true"></b-table>
</template>
<script>
const columns = [
  {
    field: "date",
    label: "日付",
    width: "150"
  },
  {
    field: "duration",
    label: "時間",
    width: "150"
  },
  {
    field: "start",
    label: "start"
  },
  {
    field: "end",
    label: "end"
  }
];
export default {
  props: ["array"],
  computed: {
    bueData() {
      return this.array.map(row => {
        return {
          date: row.date.toFormat("yyyy-MM-dd"),
          duration: row.duration.toFormat("h時間mm分"),
          start: row.startTime.toFormat("HH:mm"),
          end: row.endTime.toFormat("HH:mm")
        };
      });
    }
  },
  data() {
    return {
      columns
    };
  }
};
</script>
<style>
.sleep-table * {
  border: solid 1px;
}
</style>
