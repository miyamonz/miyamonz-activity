import fetch from "isomorphic-unfetch";
export async function fetchFitbit(url: string) {
  const baseURL = "https://api.fitbit.com";
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //TOKENの有効期限注意
      Authorization: `Bearer ${process.env.FITBIT_ACCESS_TOKEN}`,
    },
  };

  return fetch(`${baseURL}${url}`, config);
}

export function getSleepList() {
  const param = new URLSearchParams({
    afterDate: "2022-04-01",
    offset: "0",
    limit: "100",
    sort: "desc",
  });
  const path = `/1.2/user/-/sleep/list.json?${param}`;
  return fetchFitbit(path);
}
