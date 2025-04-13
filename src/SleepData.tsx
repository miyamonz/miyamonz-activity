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

const STAGE_COLORS = {
  deep: "bg-blue-700",
  light: "bg-blue-400",
  rem: "bg-purple-500",
  wake: "bg-gray-400",
} as const;

function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ja-JP", {
    month: "numeric",
    day: "numeric",
    weekday: "short",
  });
}

function parseTime(timeStr: string): Date {
  return new Date(timeStr);
}

function formatTimeHM(date: Date): string {
  return date.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function getTimePosition(date: Date): number {
  const hours = date.getHours() + date.getMinutes() / 60;
  // 時間を0-24の範囲で位置に変換（パーセント）
  return (hours / 24) * 100;
}

function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      {children}
    </div>
  );
}

export function SleepData({ sleep }: { sleep: SleepData[] }) {
  const maxMinutes = Math.max(...sleep.map((s) => s.timeInBed));

  return (
    <div className="w-full p-4">
      <div className="space-y-2">
        {sleep.map((day) => {
          const startTime = parseTime(day.startTime);
          const endTime = parseTime(day.endTime);
          const startPos = getTimePosition(startTime);
          const endPos = getTimePosition(endTime);
          const width =
            endPos > startPos ? endPos - startPos : 100 - startPos + endPos;

          return (
            <div key={day.dateOfSleep} className="flex items-center gap-4">
              <div className="w-24 text-sm">{formatDate(day.dateOfSleep)}</div>

              {/* 睡眠ステージのバーグラフ */}
              <div className="flex-1">
                <div className="relative h-8 flex">
                  {Object.entries(day.levels.summary).map(([stage, data]) => {
                    if (
                      !data ||
                      !STAGE_COLORS[stage as keyof typeof STAGE_COLORS]
                    )
                      return null;
                    const width = (data.minutes / maxMinutes) * 100;
                    return (
                      <div
                        key={stage}
                        className={`h-full ${
                          STAGE_COLORS[stage as keyof typeof STAGE_COLORS]
                        }`}
                        style={{ width: `${width}%` }}
                        title={`${stage}: ${formatTime(data.minutes)}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* 時間軸上の睡眠時間帯 */}
              <div className="w-48 relative h-8">
                {/* 時間軸の目盛り（6時間ごと） */}
                <div className="absolute inset-0 flex">
                  {[0, 6, 12, 18].map((hour) => (
                    <div
                      key={hour}
                      className="flex-1 border-l border-gray-200 text-xs text-gray-400"
                      style={{ marginTop: "-1.2rem" }}
                    >
                      {hour}
                    </div>
                  ))}
                </div>
                {/* 睡眠時間帯のバー */}
                <div
                  className="group relative h-full bg-blue-500 hover:bg-blue-600 transition-colors"
                  style={{
                    left: `${startPos}%`,
                    width: `${width}%`,
                  }}
                >
                  <Tooltip>
                    {formatTimeHM(startTime)} - {formatTimeHM(endTime)}
                  </Tooltip>
                </div>
              </div>

              <div className="w-24 text-sm text-right">
                {formatTime(day.minutesAsleep)}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex gap-4 justify-end text-sm">
        {Object.entries(STAGE_COLORS).map(([stage, color]) => (
          <div key={stage} className="flex items-center gap-1">
            <div className={`w-3 h-3 ${color}`} />
            <span>{stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
