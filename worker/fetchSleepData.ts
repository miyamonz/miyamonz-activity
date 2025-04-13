import { parse } from "valibot";
import { example } from "./cache";
import { toSleepQueryParams } from "./schema";
import { SleepResponse, SleepResponseSchema } from "./sleepSchema";

let cache: SleepResponse = parse(SleepResponseSchema, example);
function saveCache(json: SleepResponse) {
  cache = json;
  // console.log("saveCache", JSON.stringify(json, null, 2));
  // fs.writeFileSync("cache.json", JSON.stringify(json, null, 2));
}
export async function fetchSleepData(accessToken: string) {
  if (cache) {
    return cache;
  }
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
  const json = await response.json();
  const parsed = parse(SleepResponseSchema, json);
  saveCache(parsed);
  return parsed;
}
