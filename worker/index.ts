import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";

import { fetchAuthFitbit } from "./fetchAuthFitbit";
import { fetchSleepData } from "./fetchSleepData";
import { setAccessToken, getAccessToken } from "./accessToken";

const FITBIT_AUTHORIZATION_URI = "https://www.fitbit.com/oauth2/authorize";

const app = new Hono<{ Bindings: Env }>();
app.use(contextStorage());

const route = app
  .get("/auth", async (c) => {
    const { FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET } = c.env;
    const url = new URL(c.req.url);
    url.pathname = "/callback";
    const FITBIT_REDIRECT_URL = url.toString();
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
      const url = new URL(c.req.url);
      url.pathname = "/callback";
      url.search = "";
      const data = await fetchAuthFitbit(code, url.toString(), {
        FITBIT_CLIENT_ID,
        FITBIT_CLIENT_SECRET,
      });
      console.log("data", data);

      const accessToken = data.access_token;
      await setAccessToken(accessToken);

      // return c.redirect("/");

      // For now, just display success
      return c.html(
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
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return c.json({ message: "Authorization code not found" } as const, 400);
    }
    const result = await fetchSleepData(accessToken);
    if (result.ok) {
      return c.json(result.data, 200);
    } else {
      if (result.errorType === "expired_token") {
        return c.json({ message: "expired token!!!!!!!!" } as const, 401);
      } else {
        console.error(result.data);
        return c.json({ message: "Failed to fetch sleep data" } as const, 400);
      }
    }
  });

export default route;
