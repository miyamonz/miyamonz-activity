import { hc } from "hono/client";
import type route from "../worker";

export const client = hc<typeof route>("/");
