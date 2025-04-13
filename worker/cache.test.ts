import { describe, it, expect } from "vitest";
import { example } from "./cache";
import { SleepResponseSchema } from "./sleepSchema";
import { parse } from "valibot";

describe("cache", () => {
  it("should match the sleep schema", () => {
    expect(() => parse(SleepResponseSchema, example)).not.toThrow();
  });
});
