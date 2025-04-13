import { toSleepQueryParams } from "./schema";

let cache: unknown = {
  sleep: [
    {
      dateOfSleep: "2025-04-01",
      duration: 21000000,
      efficiency: 97,
      startTime: "2025-04-01T04:55:30.000",
      endTime: "2025-04-01T10:46:00.000",
      infoCode: 0,
      isMainSleep: true,
      levels: {
        data: [
          {
            dateTime: "2025-04-01T04:55:30.000",
            level: "wake",
            seconds: 420,
          },
          {
            dateTime: "2025-04-01T05:02:30.000",
            level: "light",
            seconds: 960,
          },
          {
            dateTime: "2025-04-01T05:18:30.000",
            level: "deep",
            seconds: 990,
          },
          {
            dateTime: "2025-04-01T05:35:00.000",
            level: "light",
            seconds: 660,
          },
          {
            dateTime: "2025-04-01T05:46:00.000",
            level: "deep",
            seconds: 810,
          },
          {
            dateTime: "2025-04-01T05:59:30.000",
            level: "light",
            seconds: 120,
          },
          {
            dateTime: "2025-04-01T06:01:30.000",
            level: "rem",
            seconds: 2280,
          },
          {
            dateTime: "2025-04-01T06:39:30.000",
            level: "light",
            seconds: 1080,
          },
          {
            dateTime: "2025-04-01T06:57:30.000",
            level: "deep",
            seconds: 1140,
          },
          {
            dateTime: "2025-04-01T07:16:30.000",
            level: "light",
            seconds: 630,
          },
          {
            dateTime: "2025-04-01T07:27:00.000",
            level: "deep",
            seconds: 1500,
          },
          {
            dateTime: "2025-04-01T07:52:00.000",
            level: "light",
            seconds: 1500,
          },
          {
            dateTime: "2025-04-01T08:17:00.000",
            level: "rem",
            seconds: 600,
          },
          {
            dateTime: "2025-04-01T08:27:00.000",
            level: "light",
            seconds: 1980,
          },
          {
            dateTime: "2025-04-01T09:00:00.000",
            level: "wake",
            seconds: 300,
          },
          {
            dateTime: "2025-04-01T09:05:00.000",
            level: "rem",
            seconds: 360,
          },
          {
            dateTime: "2025-04-01T09:11:00.000",
            level: "light",
            seconds: 1020,
          },
          {
            dateTime: "2025-04-01T09:28:00.000",
            level: "rem",
            seconds: 1680,
          },
          {
            dateTime: "2025-04-01T09:56:00.000",
            level: "light",
            seconds: 1200,
          },
          {
            dateTime: "2025-04-01T10:16:00.000",
            level: "deep",
            seconds: 1140,
          },
          {
            dateTime: "2025-04-01T10:35:00.000",
            level: "light",
            seconds: 660,
          },
        ],
        shortData: [
          {
            dateTime: "2025-04-01T05:05:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-01T05:34:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-01T05:58:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-01T06:04:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T06:10:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T06:13:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T06:23:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T06:39:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T06:41:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T06:46:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T07:15:00.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-01T07:19:00.000",
            level: "wake",
            seconds: 180,
          },
          {
            dateTime: "2025-04-01T07:51:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T07:55:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T08:00:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-01T08:08:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-01T08:13:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T08:30:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T08:48:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T08:54:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T09:12:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T09:19:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T09:23:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-01T09:40:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T09:48:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T09:57:00.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-01T10:00:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T10:04:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-01T10:07:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-01T10:34:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-01T10:43:30.000",
            level: "wake",
            seconds: 150,
          },
        ],
        summary: {
          light: {
            count: 28,
            minutes: 144,
            thirtyDayAvgMinutes: 0,
          },
          deep: {
            count: 5,
            minutes: 88,
            thirtyDayAvgMinutes: 0,
          },
          rem: {
            count: 10,
            minutes: 78,
            thirtyDayAvgMinutes: 0,
          },
          wake: {
            count: 33,
            minutes: 40,
            thirtyDayAvgMinutes: 0,
          },
        },
      },
      logId: 48833026018,
      minutesAfterWakeup: 0,
      minutesAwake: 40,
      minutesAsleep: 310,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 350,
      type: "stages",
    },
    {
      dateOfSleep: "2025-04-02",
      duration: 22500000,
      efficiency: 95,
      startTime: "2025-04-02T03:57:00.000",
      endTime: "2025-04-02T10:12:30.000",
      infoCode: 0,
      isMainSleep: true,
      levels: {
        data: [
          {
            dateTime: "2025-04-02T03:57:00.000",
            level: "wake",
            seconds: 840,
          },
          {
            dateTime: "2025-04-02T04:11:00.000",
            level: "light",
            seconds: 600,
          },
          {
            dateTime: "2025-04-02T04:21:00.000",
            level: "deep",
            seconds: 690,
          },
          {
            dateTime: "2025-04-02T04:32:30.000",
            level: "light",
            seconds: 480,
          },
          {
            dateTime: "2025-04-02T04:40:30.000",
            level: "deep",
            seconds: 1110,
          },
          {
            dateTime: "2025-04-02T04:59:00.000",
            level: "light",
            seconds: 720,
          },
          {
            dateTime: "2025-04-02T05:11:00.000",
            level: "wake",
            seconds: 960,
          },
          {
            dateTime: "2025-04-02T05:27:00.000",
            level: "light",
            seconds: 1560,
          },
          {
            dateTime: "2025-04-02T05:53:00.000",
            level: "deep",
            seconds: 420,
          },
          {
            dateTime: "2025-04-02T06:00:00.000",
            level: "light",
            seconds: 2760,
          },
          {
            dateTime: "2025-04-02T06:46:00.000",
            level: "rem",
            seconds: 2730,
          },
          {
            dateTime: "2025-04-02T07:31:30.000",
            level: "light",
            seconds: 570,
          },
          {
            dateTime: "2025-04-02T07:41:00.000",
            level: "deep",
            seconds: 1650,
          },
          {
            dateTime: "2025-04-02T08:08:30.000",
            level: "light",
            seconds: 2190,
          },
          {
            dateTime: "2025-04-02T08:45:00.000",
            level: "rem",
            seconds: 840,
          },
          {
            dateTime: "2025-04-02T08:59:00.000",
            level: "wake",
            seconds: 510,
          },
          {
            dateTime: "2025-04-02T09:07:30.000",
            level: "light",
            seconds: 450,
          },
          {
            dateTime: "2025-04-02T09:15:00.000",
            level: "rem",
            seconds: 360,
          },
          {
            dateTime: "2025-04-02T09:21:00.000",
            level: "light",
            seconds: 1380,
          },
          {
            dateTime: "2025-04-02T09:44:00.000",
            level: "deep",
            seconds: 270,
          },
          {
            dateTime: "2025-04-02T09:48:30.000",
            level: "rem",
            seconds: 1200,
          },
          {
            dateTime: "2025-04-02T10:08:30.000",
            level: "wake",
            seconds: 240,
          },
        ],
        shortData: [
          {
            dateTime: "2025-04-02T04:32:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T05:05:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T05:29:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T05:32:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T05:35:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T06:16:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-02T06:41:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T07:07:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-02T07:15:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T07:32:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-02T08:08:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T08:18:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-02T08:25:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T08:29:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-02T08:41:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T09:24:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-02T09:48:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-02T10:05:00.000",
            level: "wake",
            seconds: 60,
          },
        ],
        summary: {
          light: {
            count: 21,
            minutes: 170,
            thirtyDayAvgMinutes: 144,
          },
          deep: {
            count: 5,
            minutes: 68,
            thirtyDayAvgMinutes: 88,
          },
          rem: {
            count: 7,
            minutes: 80,
            thirtyDayAvgMinutes: 78,
          },
          wake: {
            count: 22,
            minutes: 57,
            thirtyDayAvgMinutes: 40,
          },
        },
      },
      logId: 48841205794,
      minutesAfterWakeup: 0,
      minutesAwake: 57,
      minutesAsleep: 318,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 375,
      type: "stages",
    },
    {
      dateOfSleep: "2025-04-03",
      duration: 22320000,
      efficiency: 96,
      startTime: "2025-04-03T03:43:30.000",
      endTime: "2025-04-03T09:56:00.000",
      infoCode: 0,
      isMainSleep: true,
      levels: {
        data: [
          {
            dateTime: "2025-04-03T03:43:30.000",
            level: "wake",
            seconds: 480,
          },
          {
            dateTime: "2025-04-03T03:51:30.000",
            level: "light",
            seconds: 1020,
          },
          {
            dateTime: "2025-04-03T04:08:30.000",
            level: "deep",
            seconds: 2370,
          },
          {
            dateTime: "2025-04-03T04:48:00.000",
            level: "light",
            seconds: 840,
          },
          {
            dateTime: "2025-04-03T05:02:00.000",
            level: "wake",
            seconds: 300,
          },
          {
            dateTime: "2025-04-03T05:07:00.000",
            level: "light",
            seconds: 4770,
          },
          {
            dateTime: "2025-04-03T06:26:30.000",
            level: "deep",
            seconds: 300,
          },
          {
            dateTime: "2025-04-03T06:31:30.000",
            level: "light",
            seconds: 600,
          },
          {
            dateTime: "2025-04-03T06:41:30.000",
            level: "rem",
            seconds: 990,
          },
          {
            dateTime: "2025-04-03T06:58:00.000",
            level: "light",
            seconds: 1470,
          },
          {
            dateTime: "2025-04-03T07:22:30.000",
            level: "wake",
            seconds: 1500,
          },
          {
            dateTime: "2025-04-03T07:47:30.000",
            level: "light",
            seconds: 3540,
          },
          {
            dateTime: "2025-04-03T08:46:30.000",
            level: "deep",
            seconds: 330,
          },
          {
            dateTime: "2025-04-03T08:52:00.000",
            level: "light",
            seconds: 2430,
          },
          {
            dateTime: "2025-04-03T09:32:30.000",
            level: "rem",
            seconds: 300,
          },
          {
            dateTime: "2025-04-03T09:37:30.000",
            level: "wake",
            seconds: 300,
          },
          {
            dateTime: "2025-04-03T09:42:30.000",
            level: "light",
            seconds: 180,
          },
          {
            dateTime: "2025-04-03T09:45:30.000",
            level: "wake",
            seconds: 630,
          },
        ],
        shortData: [
          {
            dateTime: "2025-04-03T03:54:30.000",
            level: "wake",
            seconds: 180,
          },
          {
            dateTime: "2025-04-03T04:00:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T04:54:30.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-03T05:13:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T05:20:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T05:31:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T05:35:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T05:57:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T06:32:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T06:37:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T06:44:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T06:47:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T07:58:30.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-03T08:10:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T08:18:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T08:22:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T08:52:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-03T08:59:00.000",
            level: "wake",
            seconds: 180,
          },
          {
            dateTime: "2025-04-03T09:04:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T09:23:30.000",
            level: "wake",
            seconds: 120,
          },
        ],
        summary: {
          light: {
            count: 25,
            minutes: 226,
            thirtyDayAvgMinutes: 157,
          },
          deep: {
            count: 3,
            minutes: 50,
            thirtyDayAvgMinutes: 78,
          },
          rem: {
            count: 4,
            minutes: 20,
            thirtyDayAvgMinutes: 79,
          },
          wake: {
            count: 25,
            minutes: 76,
            thirtyDayAvgMinutes: 49,
          },
        },
      },
      logId: 48851151341,
      minutesAfterWakeup: 0,
      minutesAwake: 76,
      minutesAsleep: 296,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 372,
      type: "stages",
    },
    {
      dateOfSleep: "2025-04-03",
      duration: 6420000,
      efficiency: 93,
      startTime: "2025-04-03T20:19:30.000",
      endTime: "2025-04-03T22:06:30.000",
      infoCode: 2,
      isMainSleep: false,
      levels: {
        data: [
          {
            dateTime: "2025-04-03T20:19:30.000",
            level: "asleep",
            seconds: 2640,
          },
          {
            dateTime: "2025-04-03T21:03:30.000",
            level: "restless",
            seconds: 180,
          },
          {
            dateTime: "2025-04-03T21:06:30.000",
            level: "asleep",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T21:07:30.000",
            level: "restless",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T21:08:30.000",
            level: "asleep",
            seconds: 1620,
          },
          {
            dateTime: "2025-04-03T21:35:30.000",
            level: "restless",
            seconds: 120,
          },
          {
            dateTime: "2025-04-03T21:37:30.000",
            level: "asleep",
            seconds: 120,
          },
          {
            dateTime: "2025-04-03T21:39:30.000",
            level: "restless",
            seconds: 60,
          },
          {
            dateTime: "2025-04-03T21:40:30.000",
            level: "asleep",
            seconds: 1560,
          },
        ],
        summary: {
          awake: {
            count: 0,
            minutes: 0,
          },
          asleep: {
            count: 0,
            minutes: 100,
          },
          restless: {
            count: 4,
            minutes: 7,
          },
        },
      },
      logId: 48857729199,
      minutesAfterWakeup: 0,
      minutesAwake: 7,
      minutesAsleep: 100,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 107,
      type: "classic",
    },
    {
      dateOfSleep: "2025-04-04",
      duration: 22560000,
      efficiency: 92,
      startTime: "2025-04-04T04:27:30.000",
      endTime: "2025-04-04T10:43:30.000",
      infoCode: 0,
      isMainSleep: true,
      levels: {
        data: [
          {
            dateTime: "2025-04-04T04:27:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T04:28:30.000",
            level: "light",
            seconds: 150,
          },
          {
            dateTime: "2025-04-04T04:31:00.000",
            level: "wake",
            seconds: 630,
          },
          {
            dateTime: "2025-04-04T04:41:30.000",
            level: "light",
            seconds: 1050,
          },
          {
            dateTime: "2025-04-04T04:59:00.000",
            level: "deep",
            seconds: 690,
          },
          {
            dateTime: "2025-04-04T05:10:30.000",
            level: "light",
            seconds: 600,
          },
          {
            dateTime: "2025-04-04T05:20:30.000",
            level: "rem",
            seconds: 300,
          },
          {
            dateTime: "2025-04-04T05:25:30.000",
            level: "light",
            seconds: 1320,
          },
          {
            dateTime: "2025-04-04T05:47:30.000",
            level: "rem",
            seconds: 1980,
          },
          {
            dateTime: "2025-04-04T06:20:30.000",
            level: "light",
            seconds: 1380,
          },
          {
            dateTime: "2025-04-04T06:43:30.000",
            level: "deep",
            seconds: 2280,
          },
          {
            dateTime: "2025-04-04T07:21:30.000",
            level: "light",
            seconds: 4980,
          },
          {
            dateTime: "2025-04-04T08:44:30.000",
            level: "wake",
            seconds: 1290,
          },
          {
            dateTime: "2025-04-04T09:06:00.000",
            level: "light",
            seconds: 3930,
          },
          {
            dateTime: "2025-04-04T10:11:30.000",
            level: "rem",
            seconds: 1170,
          },
          {
            dateTime: "2025-04-04T10:31:00.000",
            level: "light",
            seconds: 750,
          },
        ],
        shortData: [
          {
            dateTime: "2025-04-04T04:27:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T05:11:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T05:16:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T05:38:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T05:49:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T05:54:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T06:00:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T06:04:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T06:09:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T06:14:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T06:17:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T06:22:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T06:30:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T07:19:00.000",
            level: "wake",
            seconds: 150,
          },
          {
            dateTime: "2025-04-04T07:25:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T07:37:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T07:42:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T07:48:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T07:51:00.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-04T07:54:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T08:11:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T08:15:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-04T08:21:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T08:24:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T08:30:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-04T09:12:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T09:17:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T10:04:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T10:08:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T10:10:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T10:13:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T10:15:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T10:29:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-04T10:34:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T10:39:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T10:42:30.000",
            level: "wake",
            seconds: 60,
          },
        ],
        summary: {
          light: {
            count: 31,
            minutes: 217,
            thirtyDayAvgMinutes: 180,
          },
          deep: {
            count: 2,
            minutes: 47,
            thirtyDayAvgMinutes: 69,
          },
          rem: {
            count: 12,
            minutes: 51,
            thirtyDayAvgMinutes: 59,
          },
          wake: {
            count: 38,
            minutes: 61,
            thirtyDayAvgMinutes: 58,
          },
        },
      },
      logId: 48862612529,
      minutesAfterWakeup: 0,
      minutesAwake: 61,
      minutesAsleep: 315,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 376,
      type: "stages",
    },
    {
      dateOfSleep: "2025-04-05",
      duration: 31920000,
      efficiency: 96,
      startTime: "2025-04-04T23:01:30.000",
      endTime: "2025-04-05T07:53:30.000",
      infoCode: 0,
      isMainSleep: true,
      levels: {
        data: [
          {
            dateTime: "2025-04-04T23:01:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-04T23:02:00.000",
            level: "deep",
            seconds: 480,
          },
          {
            dateTime: "2025-04-04T23:10:00.000",
            level: "light",
            seconds: 480,
          },
          {
            dateTime: "2025-04-04T23:18:00.000",
            level: "deep",
            seconds: 1260,
          },
          {
            dateTime: "2025-04-04T23:39:00.000",
            level: "light",
            seconds: 720,
          },
          {
            dateTime: "2025-04-04T23:51:00.000",
            level: "wake",
            seconds: 270,
          },
          {
            dateTime: "2025-04-04T23:55:30.000",
            level: "light",
            seconds: 1710,
          },
          {
            dateTime: "2025-04-05T00:24:00.000",
            level: "deep",
            seconds: 2910,
          },
          {
            dateTime: "2025-04-05T01:12:30.000",
            level: "light",
            seconds: 5070,
          },
          {
            dateTime: "2025-04-05T02:37:00.000",
            level: "rem",
            seconds: 1080,
          },
          {
            dateTime: "2025-04-05T02:55:00.000",
            level: "light",
            seconds: 2400,
          },
          {
            dateTime: "2025-04-05T03:35:00.000",
            level: "wake",
            seconds: 390,
          },
          {
            dateTime: "2025-04-05T03:41:30.000",
            level: "light",
            seconds: 1650,
          },
          {
            dateTime: "2025-04-05T04:09:00.000",
            level: "rem",
            seconds: 1290,
          },
          {
            dateTime: "2025-04-05T04:30:30.000",
            level: "light",
            seconds: 660,
          },
          {
            dateTime: "2025-04-05T04:41:30.000",
            level: "deep",
            seconds: 1890,
          },
          {
            dateTime: "2025-04-05T05:13:00.000",
            level: "light",
            seconds: 4050,
          },
          {
            dateTime: "2025-04-05T06:20:30.000",
            level: "wake",
            seconds: 300,
          },
          {
            dateTime: "2025-04-05T06:25:30.000",
            level: "light",
            seconds: 2280,
          },
          {
            dateTime: "2025-04-05T07:03:30.000",
            level: "wake",
            seconds: 390,
          },
          {
            dateTime: "2025-04-05T07:10:00.000",
            level: "light",
            seconds: 330,
          },
          {
            dateTime: "2025-04-05T07:15:30.000",
            level: "rem",
            seconds: 2100,
          },
          {
            dateTime: "2025-04-05T07:50:30.000",
            level: "light",
            seconds: 180,
          },
        ],
        shortData: [
          {
            dateTime: "2025-04-04T23:01:30.000",
            level: "wake",
            seconds: 180,
          },
          {
            dateTime: "2025-04-04T23:38:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T23:42:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-04T23:47:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T00:03:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T01:12:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T01:22:30.000",
            level: "wake",
            seconds: 180,
          },
          {
            dateTime: "2025-04-05T01:51:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T02:22:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T02:31:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T02:35:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T02:40:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T02:44:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T02:52:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T03:12:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-05T03:25:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T03:29:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-05T03:45:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T03:47:30.000",
            level: "wake",
            seconds: 150,
          },
          {
            dateTime: "2025-04-05T03:59:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T04:16:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T04:28:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T04:31:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T04:34:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T04:36:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-05T05:11:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-05T05:39:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-05T05:44:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T05:50:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T05:59:00.000",
            level: "wake",
            seconds: 150,
          },
          {
            dateTime: "2025-04-05T06:03:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T06:09:00.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-05T06:14:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-05T06:18:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T06:31:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T06:36:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T06:46:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T06:49:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-05T06:53:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-05T06:56:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T07:14:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-05T07:51:30.000",
            level: "wake",
            seconds: 30,
          },
        ],
        summary: {
          light: {
            count: 44,
            minutes: 288,
            thirtyDayAvgMinutes: 189,
          },
          deep: {
            count: 4,
            minutes: 104,
            thirtyDayAvgMinutes: 63,
          },
          rem: {
            count: 8,
            minutes: 72,
            thirtyDayAvgMinutes: 57,
          },
          wake: {
            count: 46,
            minutes: 68,
            thirtyDayAvgMinutes: 59,
          },
        },
      },
      logId: 48871116968,
      minutesAfterWakeup: 0,
      minutesAwake: 68,
      minutesAsleep: 464,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 532,
      type: "stages",
    },
    {
      dateOfSleep: "2025-04-05",
      duration: 9720000,
      efficiency: 98,
      startTime: "2025-04-05T09:21:30.000",
      endTime: "2025-04-05T12:03:30.000",
      infoCode: 2,
      isMainSleep: false,
      levels: {
        data: [
          {
            dateTime: "2025-04-05T09:21:30.000",
            level: "asleep",
            seconds: 1620,
          },
          {
            dateTime: "2025-04-05T09:48:30.000",
            level: "restless",
            seconds: 120,
          },
          {
            dateTime: "2025-04-05T09:50:30.000",
            level: "asleep",
            seconds: 300,
          },
          {
            dateTime: "2025-04-05T09:55:30.000",
            level: "restless",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T09:56:30.000",
            level: "asleep",
            seconds: 6300,
          },
          {
            dateTime: "2025-04-05T11:41:30.000",
            level: "restless",
            seconds: 60,
          },
          {
            dateTime: "2025-04-05T11:42:30.000",
            level: "asleep",
            seconds: 1260,
          },
        ],
        summary: {
          awake: {
            count: 0,
            minutes: 0,
          },
          asleep: {
            count: 0,
            minutes: 158,
          },
          restless: {
            count: 3,
            minutes: 4,
          },
        },
      },
      logId: 48872461254,
      minutesAfterWakeup: 0,
      minutesAwake: 4,
      minutesAsleep: 158,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 162,
      type: "classic",
    },
    {
      dateOfSleep: "2025-04-06",
      duration: 13860000,
      efficiency: 96,
      startTime: "2025-04-06T04:07:30.000",
      endTime: "2025-04-06T07:58:30.000",
      infoCode: 0,
      isMainSleep: true,
      levels: {
        data: [
          {
            dateTime: "2025-04-06T04:07:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T04:08:00.000",
            level: "light",
            seconds: 1020,
          },
          {
            dateTime: "2025-04-06T04:25:00.000",
            level: "deep",
            seconds: 1590,
          },
          {
            dateTime: "2025-04-06T04:51:30.000",
            level: "light",
            seconds: 720,
          },
          {
            dateTime: "2025-04-06T05:03:30.000",
            level: "rem",
            seconds: 1500,
          },
          {
            dateTime: "2025-04-06T05:28:30.000",
            level: "wake",
            seconds: 390,
          },
          {
            dateTime: "2025-04-06T05:35:00.000",
            level: "light",
            seconds: 3720,
          },
          {
            dateTime: "2025-04-06T06:37:00.000",
            level: "wake",
            seconds: 510,
          },
          {
            dateTime: "2025-04-06T06:45:30.000",
            level: "light",
            seconds: 180,
          },
          {
            dateTime: "2025-04-06T06:48:30.000",
            level: "wake",
            seconds: 210,
          },
          {
            dateTime: "2025-04-06T06:52:00.000",
            level: "light",
            seconds: 2640,
          },
          {
            dateTime: "2025-04-06T07:36:00.000",
            level: "deep",
            seconds: 960,
          },
          {
            dateTime: "2025-04-06T07:52:00.000",
            level: "light",
            seconds: 390,
          },
        ],
        shortData: [
          {
            dateTime: "2025-04-06T04:07:30.000",
            level: "wake",
            seconds: 150,
          },
          {
            dateTime: "2025-04-06T04:15:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T04:51:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T04:56:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T05:02:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T05:08:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T05:13:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T05:18:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T05:22:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T05:42:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T06:07:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T06:26:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-06T07:02:00.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-06T07:05:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T07:10:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T07:50:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-06T07:54:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-06T07:58:00.000",
            level: "wake",
            seconds: 30,
          },
        ],
        summary: {
          light: {
            count: 16,
            minutes: 135,
            thirtyDayAvgMinutes: 209,
          },
          deep: {
            count: 2,
            minutes: 41,
            thirtyDayAvgMinutes: 71,
          },
          rem: {
            count: 5,
            minutes: 23,
            thirtyDayAvgMinutes: 60,
          },
          wake: {
            count: 21,
            minutes: 32,
            thirtyDayAvgMinutes: 60,
          },
        },
      },
      logId: 48881304787,
      minutesAfterWakeup: 0,
      minutesAwake: 32,
      minutesAsleep: 199,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 231,
      type: "stages",
    },
    {
      dateOfSleep: "2025-04-07",
      duration: 18600000,
      efficiency: 91,
      startTime: "2025-04-07T02:38:30.000",
      endTime: "2025-04-07T07:49:00.000",
      infoCode: 0,
      isMainSleep: true,
      levels: {
        data: [
          {
            dateTime: "2025-04-07T02:38:30.000",
            level: "wake",
            seconds: 930,
          },
          {
            dateTime: "2025-04-07T02:54:00.000",
            level: "light",
            seconds: 2460,
          },
          {
            dateTime: "2025-04-07T03:35:00.000",
            level: "wake",
            seconds: 210,
          },
          {
            dateTime: "2025-04-07T03:38:30.000",
            level: "light",
            seconds: 900,
          },
          {
            dateTime: "2025-04-07T03:53:30.000",
            level: "wake",
            seconds: 480,
          },
          {
            dateTime: "2025-04-07T04:01:30.000",
            level: "light",
            seconds: 540,
          },
          {
            dateTime: "2025-04-07T04:10:30.000",
            level: "rem",
            seconds: 1650,
          },
          {
            dateTime: "2025-04-07T04:38:00.000",
            level: "wake",
            seconds: 210,
          },
          {
            dateTime: "2025-04-07T04:41:30.000",
            level: "light",
            seconds: 480,
          },
          {
            dateTime: "2025-04-07T04:49:30.000",
            level: "deep",
            seconds: 3270,
          },
          {
            dateTime: "2025-04-07T05:44:00.000",
            level: "light",
            seconds: 3450,
          },
          {
            dateTime: "2025-04-07T06:41:30.000",
            level: "deep",
            seconds: 360,
          },
          {
            dateTime: "2025-04-07T06:47:30.000",
            level: "light",
            seconds: 870,
          },
          {
            dateTime: "2025-04-07T07:02:00.000",
            level: "rem",
            seconds: 300,
          },
          {
            dateTime: "2025-04-07T07:07:00.000",
            level: "light",
            seconds: 390,
          },
          {
            dateTime: "2025-04-07T07:13:30.000",
            level: "rem",
            seconds: 270,
          },
          {
            dateTime: "2025-04-07T07:18:00.000",
            level: "light",
            seconds: 420,
          },
          {
            dateTime: "2025-04-07T07:25:00.000",
            level: "rem",
            seconds: 1440,
          },
        ],
        shortData: [
          {
            dateTime: "2025-04-07T03:01:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-07T03:32:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-07T03:45:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-07T03:48:00.000",
            level: "wake",
            seconds: 180,
          },
          {
            dateTime: "2025-04-07T04:03:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-07T04:06:30.000",
            level: "wake",
            seconds: 180,
          },
          {
            dateTime: "2025-04-07T04:14:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-07T04:46:30.000",
            level: "wake",
            seconds: 150,
          },
          {
            dateTime: "2025-04-07T06:15:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-07T06:27:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-07T07:31:00.000",
            level: "wake",
            seconds: 60,
          },
        ],
        summary: {
          light: {
            count: 17,
            minutes: 146,
            thirtyDayAvgMinutes: 197,
          },
          deep: {
            count: 2,
            minutes: 61,
            thirtyDayAvgMinutes: 66,
          },
          rem: {
            count: 6,
            minutes: 59,
            thirtyDayAvgMinutes: 54,
          },
          wake: {
            count: 15,
            minutes: 44,
            thirtyDayAvgMinutes: 56,
          },
        },
      },
      logId: 48890397821,
      minutesAfterWakeup: 0,
      minutesAwake: 44,
      minutesAsleep: 266,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 310,
      type: "stages",
    },
    {
      dateOfSleep: "2025-04-08",
      duration: 27720000,
      efficiency: 98,
      startTime: "2025-04-08T01:51:00.000",
      endTime: "2025-04-08T09:33:00.000",
      infoCode: 0,
      isMainSleep: true,
      levels: {
        data: [
          {
            dateTime: "2025-04-08T01:51:00.000",
            level: "light",
            seconds: 690,
          },
          {
            dateTime: "2025-04-08T02:02:30.000",
            level: "deep",
            seconds: 1110,
          },
          {
            dateTime: "2025-04-08T02:21:00.000",
            level: "light",
            seconds: 960,
          },
          {
            dateTime: "2025-04-08T02:37:00.000",
            level: "rem",
            seconds: 1710,
          },
          {
            dateTime: "2025-04-08T03:05:30.000",
            level: "light",
            seconds: 1710,
          },
          {
            dateTime: "2025-04-08T03:34:00.000",
            level: "deep",
            seconds: 1350,
          },
          {
            dateTime: "2025-04-08T03:56:30.000",
            level: "light",
            seconds: 390,
          },
          {
            dateTime: "2025-04-08T04:03:00.000",
            level: "rem",
            seconds: 300,
          },
          {
            dateTime: "2025-04-08T04:08:00.000",
            level: "light",
            seconds: 2700,
          },
          {
            dateTime: "2025-04-08T04:53:00.000",
            level: "deep",
            seconds: 1110,
          },
          {
            dateTime: "2025-04-08T05:11:30.000",
            level: "light",
            seconds: 930,
          },
          {
            dateTime: "2025-04-08T05:27:00.000",
            level: "rem",
            seconds: 870,
          },
          {
            dateTime: "2025-04-08T05:41:30.000",
            level: "light",
            seconds: 810,
          },
          {
            dateTime: "2025-04-08T05:55:00.000",
            level: "rem",
            seconds: 660,
          },
          {
            dateTime: "2025-04-08T06:06:00.000",
            level: "wake",
            seconds: 360,
          },
          {
            dateTime: "2025-04-08T06:12:00.000",
            level: "light",
            seconds: 810,
          },
          {
            dateTime: "2025-04-08T06:25:30.000",
            level: "deep",
            seconds: 480,
          },
          {
            dateTime: "2025-04-08T06:33:30.000",
            level: "light",
            seconds: 2460,
          },
          {
            dateTime: "2025-04-08T07:14:30.000",
            level: "wake",
            seconds: 750,
          },
          {
            dateTime: "2025-04-08T07:27:00.000",
            level: "light",
            seconds: 420,
          },
          {
            dateTime: "2025-04-08T07:34:00.000",
            level: "wake",
            seconds: 300,
          },
          {
            dateTime: "2025-04-08T07:39:00.000",
            level: "light",
            seconds: 240,
          },
          {
            dateTime: "2025-04-08T07:43:00.000",
            level: "rem",
            seconds: 900,
          },
          {
            dateTime: "2025-04-08T07:58:00.000",
            level: "light",
            seconds: 630,
          },
          {
            dateTime: "2025-04-08T08:08:30.000",
            level: "deep",
            seconds: 510,
          },
          {
            dateTime: "2025-04-08T08:17:00.000",
            level: "light",
            seconds: 360,
          },
          {
            dateTime: "2025-04-08T08:23:00.000",
            level: "deep",
            seconds: 1860,
          },
          {
            dateTime: "2025-04-08T08:54:00.000",
            level: "light",
            seconds: 1350,
          },
          {
            dateTime: "2025-04-08T09:16:30.000",
            level: "wake",
            seconds: 390,
          },
          {
            dateTime: "2025-04-08T09:23:00.000",
            level: "light",
            seconds: 600,
          },
        ],
        shortData: [
          {
            dateTime: "2025-04-08T01:53:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T02:20:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T02:24:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T02:41:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T02:49:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T03:07:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-08T03:15:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T03:55:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T03:58:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-08T04:09:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T04:19:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T04:33:00.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-08T04:38:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T05:22:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T05:24:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T05:32:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T05:47:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T05:50:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T05:59:30.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-08T06:33:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T06:45:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T06:53:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T07:06:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T07:09:30.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T07:12:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T07:29:00.000",
            level: "wake",
            seconds: 90,
          },
          {
            dateTime: "2025-04-08T07:42:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T07:47:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T07:53:00.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T08:01:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T08:53:30.000",
            level: "wake",
            seconds: 30,
          },
          {
            dateTime: "2025-04-08T08:59:30.000",
            level: "wake",
            seconds: 120,
          },
          {
            dateTime: "2025-04-08T09:10:00.000",
            level: "wake",
            seconds: 60,
          },
          {
            dateTime: "2025-04-08T09:31:30.000",
            level: "wake",
            seconds: 90,
          },
        ],
        summary: {
          light: {
            count: 38,
            minutes: 227,
            thirtyDayAvgMinutes: 189,
          },
          deep: {
            count: 6,
            minutes: 105,
            thirtyDayAvgMinutes: 66,
          },
          rem: {
            count: 11,
            minutes: 70,
            thirtyDayAvgMinutes: 55,
          },
          wake: {
            count: 38,
            minutes: 60,
            thirtyDayAvgMinutes: 54,
          },
        },
      },
      logId: 48903607305,
      minutesAfterWakeup: 0,
      minutesAwake: 60,
      minutesAsleep: 402,
      minutesToFallAsleep: 0,
      logType: "auto_detected",
      timeInBed: 462,
      type: "stages",
    },
  ],
  pagination: {
    afterDate: "2025-04-01",
    limit: 10,
    next: "https://api.fitbit.com/1.2/user/-/sleep/list.json?offset=10&limit=10&sort=asc&afterDate=2025-04-01",
    offset: 0,
    previous: "",
    sort: "asc",
  },
};
function saveCache(json: unknown) {
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
  saveCache(json);
  return json;
}
