import {
  format,
  parseISO,
  addDays,
  subDays,
  differenceInMinutes,
} from "date-fns";

type SleepData = {
  dateOfSleep: string;
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

const DISPLAY_START_HOUR = -2; // 前日22時から
const DISPLAY_END_HOUR = 22; // 当日22時まで
const DISPLAY_HOURS = Array.from(
  { length: DISPLAY_END_HOUR - DISPLAY_START_HOUR },
  (_, i) => DISPLAY_START_HOUR + i
);

const STAGE_ORDER = ["deep", "rem", "light", "wake"] as const;

export function SleepData({ sleep }: { sleep: SleepData[] }) {
  if (!sleep) return null;

  const lastWakeup = getLastWakeupTime(sleep);
  const sleepByDate = sleep.reduce((acc, night) => {
    const startDate = parseISO(night.startTime);
    const endDate = parseISO(night.endTime);
    const dateOfSleep = night.dateOfSleep;

    if (!acc[dateOfSleep]) {
      acc[dateOfSleep] = [];
    }
    acc[dateOfSleep].push(night);

    if (endDate < startDate) {
      const previousDate = format(
        subDays(parseISO(dateOfSleep), 1),
        "yyyy-MM-dd"
      );
      if (!acc[previousDate]) {
        acc[previousDate] = [];
      }
      acc[previousDate].push({
        ...night,
        dateOfSleep: previousDate,
      });
    }

    return acc;
  }, {} as Record<string, SleepData[]>);

  const now = new Date();
  const hour = now.getHours();
  const currentTimeDate =
    hour >= 22
      ? format(addDays(now, 1), "yyyy-MM-dd")
      : format(now, "yyyy-MM-dd");

  if (!sleepByDate[currentTimeDate]) {
    sleepByDate[currentTimeDate] = [];
  }

  const sortedDates = Object.keys(sleepByDate).sort();

  const areas = Array.from(
    { length: DISPLAY_END_HOUR - DISPLAY_START_HOUR + 1 },
    (_, i) => {
      return ["date", "stages", "timeline"];
    }
  );

  return (
    <div className="w-full overflow-x-auto p-2">
      <div
        className="grid"
        style={{
          gridTemplateAreas: areas
            .map((row) => row.join(" "))
            .map((row) => `"${row}"`)
            .join("\n"),
          gridTemplateColumns: "6rem 10rem repeat(auto-fit, minmax(1px, 1fr))",
          gridTemplateRows: "2rem repeat(auto-fit, minmax(10px, 1fr))",
        }}
      >
        <div
          className="grid grid-cols-subgrid grid-rows-subgrid"
          style={{ gridArea: "date" }}
        >
          <Dates sleepByDate={sleepByDate} sortedDates={sortedDates} />
        </div>
        <div
          className="grid grid-cols-subgrid grid-rows-subgrid"
          style={{ gridArea: "stages" }}
        >
          <Stages sleepByDate={sleepByDate} sortedDates={sortedDates} />
        </div>

        {/* Header */}
        <div className="grid-cols-subgrid">
          <div
            className="grid border-b"
            style={{
              gridTemplateColumns: `repeat(${
                DISPLAY_END_HOUR - DISPLAY_START_HOUR
              }, 1fr)`,
            }}
          >
            {DISPLAY_HOURS.map((hour) => {
              const displayHour = hour < 0 ? hour + 24 : hour;
              return (
                <div
                  key={hour}
                  className="text-center text-sm text-gray-500 border-r last:border-r-0"
                >
                  {displayHour}:00
                  {hour < 0 && (
                    <span className="text-xs text-gray-400">
                      (-{Math.abs(hour)})
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Rows */}
        {sortedDates.map((date) => {
          const nightSleeps = sleepByDate[date];
          const stageTotals = calculateStageTotals(nightSleeps);
          const totalMinutes = Object.values(stageTotals).reduce(
            (a, b) => a + b,
            0
          );
          const displayDate = parseISO(date);

          return (
            <div
              key={date}
              className="grid h-12"
              style={{
                gridTemplateColumns: "10rem 6rem 1fr",
              }}
            >
              {/* Date */}

              {/* Stages */}

              {/* Timeline */}
              {false && (
                <div
                  className="grid border-b relative"
                  style={{
                    gridTemplateColumns: `repeat(${
                      DISPLAY_END_HOUR - DISPLAY_START_HOUR
                    }, 1fr)`,
                  }}
                >
                  {/* Grid lines */}
                  {DISPLAY_HOURS.map((hour) => (
                    <div key={hour} className="border-r last:border-r-0" />
                  ))}

                  {/* Current time */}
                  <CurrentTimeLine date={date} lastWakeup={lastWakeup} />

                  {/* Sleep blocks */}
                  <div className="absolute inset-0 flex items-center">
                    {nightSleeps.map((night, nightIndex) => (
                      <SleepBlock
                        key={night.startTime}
                        night={night}
                        index={nightIndex}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <StageLegend />
    </div>
  );
}

function Dates({
  sleepByDate,
  sortedDates,
}: {
  sleepByDate: Record<string, SleepData[]>;
  sortedDates: string[];
}) {
  return (
    <>
      <div className="w-full h-full p-2 border-b border-r text-sm text-gray-500">
        Date
      </div>
      {sortedDates.map((date) => {
        const nightSleeps = sleepByDate[date];
        const stageTotals = calculateStageTotals(nightSleeps);
        const totalMinutes = Object.values(stageTotals).reduce(
          (a, b) => a + b,
          0
        );
        const displayDate = parseISO(date);

        return (
          <div key={date} className=" h-12">
            {/* Date */}
            <div className="w-full h-full p-2 border-b border-r flex flex-col justify-center">
              <div className="font-medium text-sm">
                {format(displayDate, "M/d EEE")}
                {nightSleeps.length > 1 && (
                  <span className="ml-1 text-xs text-gray-500">
                    ({nightSleeps.length})
                  </span>
                )}
              </div>
              <div className="font-mono text-xs text-gray-500">
                {formatDuration(totalMinutes)}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
function Stages({
  sleepByDate,
  sortedDates,
}: {
  sleepByDate: Record<string, SleepData[]>;
  sortedDates: string[];
}) {
  return (
    <>
      <div className="w-full h-full p-2 border-b border-r text-sm text-gray-500">
        Stages
      </div>
      {sortedDates.map((date) => {
        const nightSleeps = sleepByDate[date];
        const stageTotals = calculateStageTotals(nightSleeps);
        const totalMinutes = Object.values(stageTotals).reduce(
          (a, b) => a + b,
          0
        );

        return (
          <div
            key={date}
            className="w-full h-full border-b border-r p-2 flex justify-center items-center"
          >
            <div className="w-full h-4 flex overflow-hidden rounded">
              {Object.entries(stageTotals)
                .sort(
                  ([a], [b]) =>
                    STAGE_ORDER.indexOf(a as any) -
                    STAGE_ORDER.indexOf(b as any)
                )
                .map(([stage, minutes]) => (
                  <StageBar key={stage} stage={stage} minutes={minutes} />
                ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

function SleepBlock({ night, index }: { night: SleepData; index: number }) {
  const startDate = parseISO(night.startTime);
  const endDate = parseISO(night.endTime);

  let startHour = calculateHourFromDate(startDate);
  let endHour = calculateHourFromDate(endDate);

  if (startDate < endDate && startHour > endHour) {
    startHour -= 24;
  }
  if (endDate < startDate) {
    endHour += 24;
  }

  if (endHour < DISPLAY_START_HOUR || startHour > DISPLAY_END_HOUR) {
    return null;
  }

  const duration = endHour - startHour;
  const verticalOffset = index * 10;

  const normalizedStartHour =
    (startHour - DISPLAY_START_HOUR) / (DISPLAY_END_HOUR - DISPLAY_START_HOUR);
  const normalizedDuration = duration / (DISPLAY_END_HOUR - DISPLAY_START_HOUR);

  return (
    <div
      className="absolute h-8 rounded"
      style={{
        left: `${normalizedStartHour * 100}%`,
        width: `${normalizedDuration * 100}%`,
        top: `${verticalOffset}px`,
        opacity: night.isMainSleep ? 1 : 0.8,
      }}
    >
      <div className="flex h-full w-full">
        {night.levels.data.map((level, index) => (
          <SleepStageTimeline
            key={index}
            level={level}
            startDate={startDate}
            duration={duration}
          />
        ))}
      </div>
    </div>
  );
}

// Utility functions
function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes.toString().padStart(2, "0")}m`;
}

function calculateStageTotals(
  nightSleeps: SleepData[]
): Record<string, number> {
  return nightSleeps.reduce((acc, night) => {
    Object.entries(night.levels.summary).forEach(([stage, data]) => {
      if (!acc[stage]) acc[stage] = 0;
      acc[stage] += data.minutes;
    });
    return acc;
  }, {} as Record<string, number>);
}

function calculateHourFromDate(date: Date): number {
  return date.getHours() + date.getMinutes() / 60;
}

function calculateCurrentTimePosition(rowDate: string): number | null {
  const now = new Date();
  const today = format(now, "yyyy-MM-dd");
  const hour = now.getHours() + now.getMinutes() / 60;

  // 22時以降の場合は、次の日の-2時として扱う
  const normalizedHour = hour >= 22 ? hour - 24 : hour;

  // 表示範囲内の時間のみ表示（前日22時から当日22時の間）
  if (
    normalizedHour < DISPLAY_START_HOUR ||
    normalizedHour > DISPLAY_END_HOUR
  ) {
    return null;
  }

  // 22時以降は翌日の行に表示
  const targetDate = hour >= 22 ? format(addDays(now, 1), "yyyy-MM-dd") : today;

  if (rowDate !== targetDate) {
    return null;
  }

  return (
    ((normalizedHour - DISPLAY_START_HOUR) /
      (DISPLAY_END_HOUR - DISPLAY_START_HOUR)) *
    100
  );
}

function formatElapsedTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes.toString().padStart(2, "0")}m`;
}

function getLastWakeupTime(sleep: SleepData[]): Date | null {
  if (!sleep || sleep.length === 0) return null;

  // 最新の日付のデータを取得
  const latestDate = sleep.reduce((latest, current) => {
    const currentDate = parseISO(current.endTime);
    return latest > currentDate ? latest : currentDate;
  }, parseISO(sleep[0].endTime));

  return latestDate;
}

// Sub-components
function TimeScaleHeader() {
  return (
    <div className="flex border-b">
      <div className="w-24 flex-shrink-0 border-r" />
      <div className="w-32 flex-shrink-0 text-center text-sm text-gray-500 border-r">
        Stages
      </div>
      <div className="flex flex-1">
        {DISPLAY_HOURS.map((hour) => {
          const displayHour = hour < 0 ? hour + 24 : hour;
          return (
            <div
              key={hour}
              className="flex-1 text-center text-sm text-gray-500 border-r border-gray-200 last:border-r-0"
            >
              {displayHour}:00
              {hour < 0 && (
                <span className="text-xs text-gray-400">
                  (-{Math.abs(hour)})
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const STAGE_COLORS = {
  wake: "#FF9B9B",
  light: "#94CAFF",
  deep: "#0066CC",
  rem: "#9B6EFF",
  asleep: "#94CAFF",
  restless: "#FFB74D",
} as const;
function StageLegend() {
  return (
    <div className="mt-4 flex gap-4 px-4">
      {Object.entries(STAGE_COLORS).map(([stage, color]) => (
        <div key={stage} className="flex items-center gap-1">
          <div className="h-3 w-3 rounded" style={{ backgroundColor: color }} />
          <span className="text-sm capitalize">{stage}</span>
        </div>
      ))}
    </div>
  );
}

function StageBar({ stage, minutes }: { stage: string; minutes: number }) {
  const width = Math.min((minutes / 720) * 100, 100);
  return (
    <div
      style={{
        width: `${width}%`,
        backgroundColor: STAGE_COLORS[stage as keyof typeof STAGE_COLORS],
      }}
      className="group relative h-full"
    >
      <div className="absolute bottom-full mb-1 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-1 text-xs text-white group-hover:block z-10">
        <div className="capitalize">{stage}</div>
        <div>{minutes}min</div>
      </div>
    </div>
  );
}

function SleepStageTimeline({
  level,
  startDate,
  duration,
}: {
  level: SleepLevel;
  startDate: Date;
  duration: number;
}) {
  const levelStartDate = parseISO(level.dateTime);
  const levelEndDate = new Date(
    levelStartDate.getTime() + level.seconds * 1000
  );
  let levelStartHour = calculateHourFromDate(levelStartDate);

  if (levelStartDate < startDate) {
    levelStartHour += 24;
  }

  const levelWidth = (level.seconds / 3600 / duration) * 100;

  return (
    <div
      style={{
        width: `${levelWidth}%`,
        backgroundColor: STAGE_COLORS[level.level as keyof typeof STAGE_COLORS],
      }}
      className="group relative h-full"
    >
      <div className="absolute bottom-full left-1/2 mb-1 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-3 py-2 text-xs text-white group-hover:block z-10">
        <div className="font-medium capitalize">{level.level}</div>
        <div>
          {format(levelStartDate, "H:mm")} - {format(levelEndDate, "H:mm")}
        </div>
        <div>{Math.floor(level.seconds / 60)}min</div>
      </div>
    </div>
  );
}

function CurrentTimeLine({
  date,
  lastWakeup,
}: {
  date: string;
  lastWakeup: Date | null;
}) {
  const position = calculateCurrentTimePosition(date);
  if (position === null) return null;

  const now = new Date();
  const elapsedMinutes = lastWakeup
    ? differenceInMinutes(now, lastWakeup)
    : null;

  return (
    <>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-red-500"
        style={{
          left: `${position}%`,
          opacity: 0.7,
        }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-1 text-xs text-white z-10"
          style={{
            left: "50%",
          }}
        >
          <div>{format(now, "H:mm")}</div>
          {elapsedMinutes !== null && lastWakeup && (
            <div className="text-gray-300">
              {formatElapsedTime(elapsedMinutes)} since last wake-up (
              {format(lastWakeup, "H:mm")})
            </div>
          )}
        </div>
      </div>
    </>
  );
}
