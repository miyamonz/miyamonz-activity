const { DateTime } = require("luxon");
const { fetch, listApi } = require("./fetch.js");

module.exports = (req, res) => {
  const date = DateTime.local()
    .plus({ days: -10 })
    .toFormat("yyyy-MM-dd");
  console.log(date);

  const url = listApi({ afterDate: date, offset: 0, limit: 10, sort: "desc" });
  console.log({ url });
  fetch(url).then(json => res.end(JSON.stringify(json)));
};
