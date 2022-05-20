import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import { refreshAccessToken } from "./refreshAccessToken";

const provider: Provider = {
  id: "fitbit",
  name: "fitbit",
  type: "oauth",
  authorization: {
    url: "https://www.fitbit.com/oauth2/authorize",
    params: {
      scope: [
        "activity",
        "heartrate",
        "location",
        "nutrition",
        "profile",
        "settings",
        "sleep",
        "social",
        "weight",
      ].join(" "),
    },
  },
  userinfo: "https://api.fitbit.com/1/user/-/profile.json",
  token: "https://api.fitbit.com/oauth2/token",
  clientId: process.env.FITBIT_CLIENT_ID,
  clientSecret: process.env.FITBIT_CLIENT_SECRET,

  profile(profile) {
    console.log(profile);
    return {
      id: profile.user.fullName,
    };
  },
};

export default NextAuth({
  providers: [provider],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ token, user, account });
      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      // session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
});
