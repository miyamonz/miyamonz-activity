import * as v from "valibot";

// Date format validation regex: yyyy-MM-dd or yyyy-MM-ddTHH:mm:ss
const dateFormatRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2})?$/;

const dateStringSchema = v.pipe(v.string(), v.regex(dateFormatRegex));

const sleepQueryParamsSchema = v.object({
  // Either beforeDate or afterDate must be specified
  beforeDate: v.optional(dateStringSchema),
  afterDate: v.optional(dateStringSchema),
  // Required sort parameter that must be either "asc" or "desc"
  sort: v.union([v.literal("asc"), v.literal("desc")]),
  // Required limit parameter, must be a number between 1 and 100
  limit: v.pipe(v.number(), v.minValue(1), v.maxValue(100)),
  // Required offset parameter, must be 0 as per API specification
  offset: v.number(),
});
type SleepQueryParams = v.InferInput<typeof sleepQueryParamsSchema>;

export const sleepQueryToParamString = v.pipe(
  sleepQueryParamsSchema,
  v.transform((input) => {
    if (input.beforeDate && input.afterDate) {
      throw new Error("beforeDate and afterDate cannot both be specified");
    }
    return `?${new URLSearchParams({
      ...(input.beforeDate && { beforeDate: input.beforeDate }),
      ...(input.afterDate && { afterDate: input.afterDate }),
      sort: input.sort,
      limit: input.limit.toString(),
      offset: input.offset.toString(),
    }).toString()}`;
  })
);

export const toSleepQueryParams = (arg: SleepQueryParams) =>
  v.parse(sleepQueryToParamString, arg);
