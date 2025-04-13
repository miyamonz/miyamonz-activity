import { parse } from "valibot";
// import { example } from "./cache";
import { toSleepQueryParams } from "./schema";
import { SleepResponse, SleepResponseSchema } from "./sleepSchema";

let cache: SleepResponse | null = null;
function saveCache(json: SleepResponse) {
  cache = json;
  // console.log("saveCache", JSON.stringify(json, null, 2));
  // fs.writeFileSync("cache.json", JSON.stringify(json, null, 2));
}
export async function fetchSleepData(accessToken: string) {
  if (cache) {
    console.log("cache used");
    return {
      ok: true,
      data: cache,
    } as const;
  }
  const paramString = toSleepQueryParams({
    afterDate: "2025-04-01",
    sort: "asc",
    offset: 0,
    limit: 30,
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
  if (response.ok) {
    const json = await response.json();
    const parsed = parse(SleepResponseSchema, json);
    saveCache(parsed);
    return {
      ok: true,
      data: parsed,
    } as const;
  } else {
    console.log("response", response);
    const json = (await response.json()) as any;
    if (json.errors.find((e: any) => e.errorType === "expired_token")) {
      console.log("json", json);
      return {
        ok: false,
        errorType: "expired_token",
        data: json,
      } as const;
    }
    console.log("json", json);

    // throw new Error("Failed to fetch sleep data");
    // return cache;
    return { ok: false, data: json } as const;
  }
}
