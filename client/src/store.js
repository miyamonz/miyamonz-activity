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
    const url =
      process.env.NODE_ENV === "production"
        ? "/api"
        : process.env.VUE_APP_API_ENDPOINT;
    console.log(url);
    const json = await fetch(url, { mode: "cors" }).then(res => res.json());
    console.log(json);
    this.sleep = json.sleep;
    return this.sleep;
  }
}
export default new Store();
