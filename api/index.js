const Koa = require("koa");
const cors = require("@koa/cors");
const app = new Koa();

const { DateTime } = require("luxon");
const { fetch, listApi } = require("./fetch.js");

app.use(cors({ origin: "*" }));
app.use(async ctx => {
  const date = DateTime.local()
    .plus({ days: -10 })
    .toFormat("yyyy-MM-dd");
  console.log(date);

  const url = listApi({ afterDate: date, offset: 0, limit: 10, sort: "desc" });
  ctx.body = await fetch(url);
});

console.log("listen on ", process.env.PORT);
app.listen(process.env.PORT);
