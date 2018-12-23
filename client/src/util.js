import { DateTime, Duration, Interval } from "luxon";

export const sleepMap = json => {
  return {
    json,
    date: DateTime.fromString(json.dateOfSleep, "yyyy-MM-dd"),
    startTime: DateTime.fromISO(json.startTime),
    endTime: DateTime.fromISO(json.endTime),
    duration: Duration.fromMillis(json.duration)
  };
};
