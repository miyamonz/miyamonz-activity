const Koa = require("koa");
const cors = require("@koa/cors");
const app = new Koa();

const { DateTime } = require("luxon");

const fetch = require("./fetch.js");
const dateApi = date => `/1.2/user/-/sleep/date/${date}.json`;
const listApi = params =>
  `/1.2/user/-/sleep/list.json?${Object.entries(params)
    .map(([key, val]) => key + "=" + val)
    .reduce((acc, p) => acc + "&" + p)}`;

app.use(cors({ origin: "*" }));
app.use(async ctx => {
  const date = DateTime.local()
    .plus({ days: -10 })
    .toFormat("yyyy-MM-dd");
  console.log(date);

  const url = listApi({ afterDate: date, offset: 0, limit: 10, sort: "desc" });
  console.log({ url });
  // const url = dateApi(date);
  ctx.body = await fetch(url);
});

console.log("listen on ", process.env.PORT);
app.listen(process.env.PORT);
