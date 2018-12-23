const Koa = require("koa");
const app = new Koa();

const fetch = require("./fetch.js");
const url = date => `/1.2/user/-/sleep/date/${date}.json`;

app.use(async ctx => {
  const date = "2018-12-22";
  ctx.body = await fetch(url(date));
});

app.listen(process.env.PORT);
