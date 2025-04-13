const FITBIT_ACCESS_TOKEN_URI = "https://api.fitbit.com/oauth2/token";
import * as v from "valibot";
import { parse } from "valibot";

// https://dev.fitbit.com/build/reference/web-api/authorization/oauth2-token/

const oauthResponseSchema = v.object({
  access_token: v.string(),
  expires_in: v.number(), // seconds, default:28800 for 8 hours
  refresh_token: v.string(),
  scope: v.string(),
  token_type: v.literal("Bearer"),
  user_id: v.string(),
});

export async function fetchAuthFitbit(
  accessToken: string,
  redirectUri: string,
  keys: { FITBIT_CLIENT_ID: string; FITBIT_CLIENT_SECRET: string }
) {
  console.log("fetchAuthFitbit");
  console.log(redirectUri);
  const params = new URLSearchParams({
    client_id: keys.FITBIT_CLIENT_ID,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
    code: accessToken,
  });

  const auth = btoa(`${keys.FITBIT_CLIENT_ID}:${keys.FITBIT_CLIENT_SECRET}`);
  const response = await fetch(FITBIT_ACCESS_TOKEN_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
    body: params.toString(),
  });

  if (response.ok) {
    const body = await response.json();
    console.log("body", body);
    try {
      const parsed = parse(oauthResponseSchema, body);
      return parsed;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    const body = await response.json();
    console.log("body", body);
    throw new Error("Failed to fetch auth fitbit");
  }
}
