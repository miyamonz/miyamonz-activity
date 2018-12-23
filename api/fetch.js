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

module.exports = fetch;
