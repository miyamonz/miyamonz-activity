const axios = require("axios");

async function fetch(date) {
  const config = {
    baseURL: "https://api.fitbit.com",
    url: `/1.2/user/-/sleep/date/${date}.json`,
    method: "get",
    headers: {
      //TOKENの有効期限注意
      Authorization: `Bearer ${process.env.FITBIT_ACCESS_TOKEN}`
    }
  };

  const res = await axios.request(config);
  return res.data;
}

// const data = fetch("2018-12-20");
module.exports = fetch;
