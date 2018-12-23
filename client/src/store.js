import Vue from "vue";

new Vue({
  data() {
    return {
      sleep: null
    };
  }
});

class Store {
  constructor() {}
  async fetch() {
    const json = await fetch("http://localhost:3000", { mode: "cors" }).then(
      res => res.json()
    );
    console.log(json);
    this.sleep = json.sleep;
    return this.sleep;
  }
}
export default new Store();
