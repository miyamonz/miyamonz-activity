import { Hono } from "hono";

import { getSignedCookie, setSignedCookie } from "hono/cookie";
import { fetchAuthFitbit } from "./fetchAuthFitbit";
import { fetchSleepData } from "./fetchSleepData";
// const FITBIT_CLIENT_ID = process.env.FITBIT_CLIENT_ID;
// const FITBIT_CLIENT_SECRET = process.env.FITBIT_CLIENT_SECRET;
// const FITBIT_REDIRECT_URL = process.env.FITBIT_REDIRECT_URL;
const FITBIT_AUTHORIZATION_URI = "https://www.fitbit.com/oauth2/authorize";

const app = new Hono<{ Bindings: Env }>();

const route = app
  .get("/auth", async (c) => {
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
  })
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
      return c.text(
        `
        <div>
          <h1>Successfully connected!</h1>
          <pre>${JSON.stringify(data, null, 2)}</pre>
          <a href="/">Back to home</a>
        </div>
      `
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
    const json = await fetchSleepData(accessToken);
    console.log("json", json);
    return c.json(json);
  });

export default route;
