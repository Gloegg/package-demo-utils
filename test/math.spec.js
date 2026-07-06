import { describe, it, expect } from "vitest";
import { sum, avg } from "../src/math.js";

describe("sum()", () => {
  it("should return 0 with no arguments", () => {
    expect(sum()).toBe(0);
  });

  it("should return 1 for sum(1)", () => {
    expect(sum(1)).toBe(1);
  });

  it("should return 3 for sum(1, 2)", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should return 15 for sum(1, 2, 3, 4, 5)", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should handle negative numbers", () => {
    expect(sum(-1, -2, -3)).toBe(-6);
  });

  it("should handle mixed positive and negative numbers", () => {
    expect(sum(-5, 10)).toBe(5);
  });

  it("should handle decimal numbers", () => {
    expect(sum(0.5, 0.5)).toBe(1);
  });
});

describe("avg()", () => {
  it("should return 5 for avg(5)", () => {
    expect(avg(5)).toBe(5);
  });

  it("should return 3 for avg(2, 4)", () => {
    expect(avg(2, 4)).toBe(3);
  });

  it("should return 3 for avg(1, 2, 3, 4, 5)", () => {
    expect(avg(1, 2, 3, 4, 5)).toBe(3);
  });

  it("should return 20 for avg(10, 20, 30)", () => {
    expect(avg(10, 20, 30)).toBe(20);
  });

  it("should handle mixed positive and negative numbers", () => {
    expect(avg(-10, -5, 0, 5, 10)).toBe(0);
  });

  it("should handle decimal numbers", () => {
    expect(Math.abs(avg(1.5, 2.5, 3) - 2.333333333333333)).toBeLessThan(
      0.0000001,
    );
  });

  it("should throw TypeError when no arguments provided", () => {
    expect(() => avg()).toThrow(TypeError);
  });

  it("should throw error with correct message", () => {
    expect(() => avg()).toThrow(/at least one number expected/);
  });
});
