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
export type SleepListResponseData = {
  pagination: {
    afterDate: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    sort: "desc" | "asc";
  };
  sleep: {
    dateOfSleep: string;
    duration: number;
    efficiency: number;
    endTime: string; // ISO date
    infoCode: number;
    isMainSleep: boolean;
    levels: {
      data: [
        {
          dateTime: string; // ISO date
          level: "light" | "rem" | "deep" | "wake";
          seconds: number;
        }[]
      ];
      summary: {
        deep: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        light: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        rem: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
        wake: {
          count: number;
          minutes: number;
          thirtyDayAvgMinutes: number;
        };
      };
    };
    logId: number;
    logType: "auto_detected" | "manual";
    minutesAfterWakeup: number;
    minutesAsleep: number;
    minutesAwake: number;
    minutesToFallAsleep: number;
    startTime: string;
    timeInBed: number;
    type: "stages" | "classic";
  }[];
};
