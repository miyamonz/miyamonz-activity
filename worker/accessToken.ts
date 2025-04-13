import { getContext } from "hono/context-storage";
import { setSignedCookie, getSignedCookie } from "hono/cookie";

export async function setAccessToken(accessToken: string) {
  const c = getContext<{ Bindings: Env }>();
  await setSignedCookie(
    c,
    "fitbit_access_token",
    accessToken,
    c.env.SECRET_KEY_FOR_SIGNED_COOKIE
  );
}
export function getAccessToken() {
  const c = getContext<{ Bindings: Env }>();
  return getSignedCookie(
    c,
    c.env.SECRET_KEY_FOR_SIGNED_COOKIE,
    "fitbit_access_token"
  );
}
