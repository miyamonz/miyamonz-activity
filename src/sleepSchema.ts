import * as v from "valibot";

// Sleep Level Data Schema
const SleepLevelDataSchema = v.object({
  datetime: v.string(),
  level: v.union([
    v.literal("wake"),
    v.literal("deep"),
    v.literal("light"),
    v.literal("rem"),
  ]),
  seconds: v.number(),
});

// Sleep Level Summary Schema
const SleepLevelSummarySchema = v.object({
  count: v.number(),
  minutes: v.number(),
  thirtyDayAvgMinutes: v.number(),
});

// Sleep Levels Schema
const SleepLevelsSchema = v.object({
  data: v.array(SleepLevelDataSchema),
  shortData: v.array(SleepLevelDataSchema),
  summary: v.object({
    deep: SleepLevelSummarySchema,
    light: SleepLevelSummarySchema,
    rem: SleepLevelSummarySchema,
    wake: SleepLevelSummarySchema,
  }),
});

// Single Sleep Entry Schema
const SleepEntrySchema = v.object({
  dateOfSleep: v.string(),
  duration: v.number(),
  efficiency: v.number(),
  startTime: v.string(),
  endTime: v.string(),
  infoCode: v.number(),
  isMainSleep: v.boolean(),
  levels: SleepLevelsSchema,
  logId: v.number(),
  minutesAfterWakeup: v.number(),
  minutesAwake: v.number(),
  minutesAsleep: v.number(),
  minutesToFallAsleep: v.number(),
  logType: v.union([v.literal("auto_detected"), v.literal("manual")]),
  timeInBed: v.number(),
  type: v.union([v.literal("stages"), v.literal("classic")]),
});

// Pagination Schema
const PaginationSchema = v.object({
  afterDate: v.pipe(v.string(), v.regex(/^\d{4}-\d{2}-\d{2}$/)),
  limit: v.number(),
  next: v.string(), // URL
  offset: v.number(),
  previous: v.string(), // URL
  sort: v.union([v.literal("asc"), v.literal("desc")]),
});

// Complete Response Schema
export const SleepResponseSchema = v.object({
  sleep: v.array(SleepEntrySchema),
  pagination: PaginationSchema,
});

export type SleepResponse = typeof SleepResponseSchema.type;
