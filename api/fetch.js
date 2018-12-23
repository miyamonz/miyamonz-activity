const axios = require("axios");

async function fetch(url) {
  const config = {
    baseURL: "https://api.fitbit.com",
    url,
    method: "get",
    headers: {
      //TOKENの有効期限注意
      Authorization: `Bearer ${process.env.FITBIT_ACCESS_TOKEN}`
    }
  };

  const res = await axios.request(config);
  return res.data;
}

const dateApi = date => `/1.2/user/-/sleep/date/${date}.json`;
const listApi = params =>
  `/1.2/user/-/sleep/list.json?${Object.entries(params)
    .map(([key, val]) => key + "=" + val)
    .reduce((acc, p) => acc + "&" + p)}`;

module.exports = { fetch, dateApi, listApi };
