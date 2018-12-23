const Koa = require("koa");
const cors = require("@koa/cors");
const app = new Koa();

const fetch = require("./fetch.js");
const url = date => `/1.2/user/-/sleep/date/${date}.json`;

app.use(cors({ origin: "*" }));
app.use(async ctx => {
  const date = "2018-12-22";
  ctx.body = await fetch(url(date));
});

app.listen(process.env.PORT);
