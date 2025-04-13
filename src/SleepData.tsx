import { Fragment } from "react";

type SleepData = {
  // dateOfSleep: string; //使わない
  startTime: string;
  endTime: string;
  efficiency: number;
  levels: {
    data: SleepLevel[];
    summary: SleepSummary;
  };
  minutesAsleep: number;
  timeInBed: number;
  isMainSleep: boolean;
};

type NormalizedSleepData = {
  normalizedDate: string;
  sleeps: Array<{
    startTime: string;
    endTime: string;
    across: "no" | "yesterday" | "tomorrow";
    minutesAsleep: number;
  }>;
};

type SleepLevel = {
  dateTime: string;
  level: string;
  seconds: number;
};
type SleepSummary = {
  light?: { minutes: number; thirtyDayAvgMinutes?: number };
  deep?: { minutes: number; thirtyDayAvgMinutes?: number };
  rem?: { minutes: number; thirtyDayAvgMinutes?: number };
  wake?: { minutes: number; thirtyDayAvgMinutes?: number };
  asleep?: { minutes: number; thirtyDayAvgMinutes?: number };
  restless?: { minutes: number; thirtyDayAvgMinutes?: number };
};

type TimelineConfig = {
  startHour: number;
};

function normalizeSleepData(
  sleepList: SleepData[],
  timelineConfig: TimelineConfig
): NormalizedSleepData[] {
  const sleepsByDate = new Map<
    string,
    Array<SleepData & { across: "no" | "yesterday" | "tomorrow" }>
  >();

  const addSleepToDate = (
    date: Date,
    sleep: SleepData,
    across: "no" | "yesterday" | "tomorrow"
  ) => {
    const normalizedDate = date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const existingSleeps = sleepsByDate.get(normalizedDate) || [];
    sleepsByDate.set(normalizedDate, [...existingSleeps, { ...sleep, across }]);
  };

  for (const sleep of sleepList) {
    const startTime = new Date(sleep.startTime);
    const endTime = new Date(sleep.endTime);

    const splitDate = new Date(startTime);
    splitDate.setHours(timelineConfig.startHour, 0, 0, 0);

    const nextDate = new Date(splitDate);
    nextDate.setDate(nextDate.getDate() + 1);
    if (startTime < splitDate && splitDate <= endTime) {
      addSleepToDate(splitDate, sleep, "tomorrow");
      addSleepToDate(nextDate, sleep, "yesterday");
    } else if (splitDate < startTime) {
      addSleepToDate(nextDate, sleep, "no");
    } else if (endTime < splitDate) {
      addSleepToDate(splitDate, sleep, "no");
    } else {
      console.error("sleep data is not in the timeline", {
        startTime,
        endTime,
        splitDate,
      });
    }
  }

  return Array.from(sleepsByDate.entries())
    .map(([normalizedDate, sleeps]) => ({
      normalizedDate,
      sleeps: sleeps
        .sort((b, a) => a.startTime.localeCompare(b.startTime))
        .map(({ startTime, endTime, across, minutesAsleep }) => ({
          startTime,
          endTime,
          across,
          minutesAsleep,
        })),
    }))
    .sort((a, b) => b.normalizedDate.localeCompare(a.normalizedDate));
}

export function SleepData({ sleep }: { sleep: SleepData[] }) {
  const timelineConfig = { startHour: 20 };
  const normalizedSleep = normalizeSleepData(sleep, timelineConfig);

  return (
    <div className="w-full ">
      <div className="grid grid-cols-[auto_auto_1fr] gap-4">
        <div className="p-2 font-bold">日付</div>
        <div className="p-2 font-bold">睡眠時間</div>
        <div className="font-bold">
          タイムライン ({timelineConfig.startHour}:00-{timelineConfig.startHour}
          :00)
          <TimelineMarkers startHour={timelineConfig.startHour} />
        </div>

        {normalizedSleep.map((day) => (
          <Fragment key={day.normalizedDate}>
            <div className="p-2 whitespace-nowrap">
              {formatDate(day.normalizedDate)}
            </div>
            <div className="p-2 whitespace-nowrap">
              {formatDuration(
                day.sleeps.reduce(
                  (total, sleep) => total + sleep.minutesAsleep,
                  0
                )
              )}
            </div>
            <div className="space-y-1">
              <Timeline sleeps={day.sleeps} timelineConfig={timelineConfig} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
}

function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}時間${mins}分`;
}

function formatTime(timeStr: string) {
  return new Date(timeStr).toLocaleTimeString("ja-JP", {
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
function Timeline({
  sleeps,
  timelineConfig,
}: {
  sleeps: NormalizedSleepData["sleeps"];
  timelineConfig: TimelineConfig;
}) {
  // 0時の位置を計算（startHourからの相対位置）
  const midnightPosition = ((24 - timelineConfig.startHour) / 24) * 100;

  return (
    <div className="relative w-full h-6 bg-gray-100 rounded">
      {/* 0時の縦線 */}
      <div
        className="absolute h-full w-px bg-gray-300"
        style={{ left: `${midnightPosition}%` }}
      />
      {sleeps.map((sleep) => (
        <TimelineSleep
          key={sleep.startTime}
          sleep={sleep}
          timelineConfig={timelineConfig}
        />
      ))}
    </div>
  );
}
function TimelineSleep({
  sleep,
  timelineConfig,
}: {
  sleep: NormalizedSleepData["sleeps"][0];
  timelineConfig: TimelineConfig;
}) {
  const startTime = new Date(sleep.startTime);
  if (sleep.across === "yesterday") {
    startTime.setHours(timelineConfig.startHour, 0, 0, 0);
  }
  const endTime = new Date(sleep.endTime);
  if (sleep.across === "tomorrow") {
    endTime.setHours(timelineConfig.startHour, 0, 0, 0);
  }
  const duration = (endTime.getTime() - startTime.getTime()) / (1000 * 60); // minutes
  const startHour = startTime.getHours() + startTime.getMinutes() / 60;
  const width = (duration / (24 * 60)) * 100; // percentage of 24 hours

  const left = (((startHour - timelineConfig.startHour + 24) % 24) / 24) * 100; // percentage from left, adjusted for startHour

  return (
    <div
      className={`absolute h-full rounded ${
        sleep.across === "no" ? "bg-blue-400" : "bg-blue-300"
      }`}
      style={{
        left: `${left}%`,
        width: `${width}%`,
      }}
    >
      {sleep.across !== "yesterday" ? (
        <span className="absolute -top-0 left-0 text-xs whitespace-nowrap">
          {formatTime(sleep.startTime)}
        </span>
      ) : null}
      {sleep.across !== "tomorrow" ? (
        <span className="absolute -top-0 left-full text-xs whitespace-nowrap">
          {formatTime(sleep.endTime)}
        </span>
      ) : null}
    </div>
  );
}

function TimelineMarkers({ startHour }: { startHour: number }) {
  // startHourから24時間分のマーカーを1時間おきに表示
  const hours = Array.from({ length: 25 }, (_, i) => (startHour + i) % 24);

  return (
    <div className="relative w-full h-4">
      {hours.map((hour, i) => (
        <div
          key={i}
          className="absolute text-xs text-gray-500 -translate-x-1/2"
          style={{ left: `${(((hour - startHour + 24) % 24) / 24) * 100}%` }}
        >
          {hour}
        </div>
      ))}
    </div>
  );
}
