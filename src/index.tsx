import { Hono } from "hono";
import { renderer } from "./renderer";

import { getSignedCookie, setSignedCookie } from "hono/cookie";
import { fetchAuthFitbit } from "./fetchAuthFitbit";
import { toSleepQueryParams } from "./schema";
import { SleepData } from "./SleepData";

// const FITBIT_CLIENT_ID = process.env.FITBIT_CLIENT_ID;
// const FITBIT_CLIENT_SECRET = process.env.FITBIT_CLIENT_SECRET;
// const FITBIT_REDIRECT_URL = process.env.FITBIT_REDIRECT_URL;
const FITBIT_AUTHORIZATION_URI = "https://www.fitbit.com/oauth2/authorize";

type Bindings = {
  FITBIT_CLIENT_ID: string;
  FITBIT_CLIENT_SECRET: string;
  FITBIT_REDIRECT_URL: string;
  SECRET_KEY_FOR_SIGNED_COOKIE: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(renderer);

app.get("/", async (c) => {
  const accessToken = await getSignedCookie(
    c,
    c.env.SECRET_KEY_FOR_SIGNED_COOKIE,
    "fitbit_access_token"
  );

  let json = null;
  console.log("accessToken", accessToken);
  if (accessToken) {
    const response = await fetchSleepData(accessToken);
    json = await response.json();
  }
  return c.render(
    <div>
      <h1>miyamonz activity</h1>
      <a href="/auth">Connect with Fitbit</a>
      <SleepData sleep={json?.sleep} />
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
});

app.get("/auth", async (c) => {
  const { FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET } = c.env;
  const FITBIT_REDIRECT_URL = "http://localhost:5173/callback";
  console.log(
    "auth",
    FITBIT_CLIENT_ID,
    FITBIT_CLIENT_SECRET,
    FITBIT_REDIRECT_URL
  );
  const params = new URLSearchParams({
    response_type: "code",
    client_id: FITBIT_CLIENT_ID,
    redirect_uri: FITBIT_REDIRECT_URL,
    scope:
      "activity heartrate location nutrition profile settings sleep social weight",
  });

  return c.redirect(`${FITBIT_AUTHORIZATION_URI}?${params.toString()}`);
});

app
  .get("/callback", async (c) => {
    const code = c.req.query("code");
    if (!code) {
      return c.text("Authorization code not found", 400);
    }
    // const encryptedToken = await encryptToken(code, ENCRYPTION_KEY);

    try {
      const { FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET } = c.env;
      const data = await fetchAuthFitbit(
        code,
        `http://localhost:5173/callback`,
        { FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET }
      );
      console.log("data", data);

      const accessToken = data.access_token;
      setSignedCookie(
        c,
        "fitbit_access_token",
        accessToken,
        c.env.SECRET_KEY_FOR_SIGNED_COOKIE
      );

      // return c.redirect("/");

      // TODO: Store the access token securely
      // For now, just display success
      return c.render(
        <div>
          <h1>Successfully connected!</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <a href="/">Back to home</a>
        </div>
      );
    } catch (error) {
      return c.text(`Error exchanging code for token: ${error}`, 500);
    }
  })
  .get("/api/fitbit", async (c) => {
    const accessToken = await getSignedCookie(
      c,
      c.env.SECRET_KEY_FOR_SIGNED_COOKIE,
      "fitbit_access_token"
    );
    if (!accessToken) {
      return c.text("Authorization code not found", 400);
    }
    const response = await fetchSleepData(accessToken);
    console.log("response", response);
    // const json = await response.json();
    return response;
  });

async function fetchSleepData(accessToken: string) {
  const paramString = toSleepQueryParams({
    afterDate: "2025-04-01",
    sort: "asc",
    offset: 0,
    limit: 10,
  });
  console.log("paramString", paramString);
  const response = await fetch(
    `https://api.fitbit.com/1.2/user/-/sleep/list.json${paramString}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response;
}

export default app;
