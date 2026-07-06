import { describe, it, expect } from "vitest";
import { reverse, greet, capitalize } from "../src/string.js";

describe("reverse()", () => {
  it("should reverse a simple string", () => {
    expect(reverse("hello")).toBe("olleh");
  });

  it("should reverse a single character", () => {
    expect(reverse("a")).toBe("a");
  });

  it("should reverse an empty string", () => {
    expect(reverse("")).toBe("");
  });

  it("should reverse a string with spaces", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
  });

  it("should reverse a string with special characters", () => {
    expect(reverse("hello!@#")).toBe("#@!olleh");
  });

  it("should reverse a string with numbers", () => {
    expect(reverse("abc123")).toBe("321cba");
  });

  it("should reverse a palindrome", () => {
    expect(reverse("racecar")).toBe("racecar");
  });

  it("should reverse a string with mixed case", () => {
    expect(reverse("HeLLo")).toBe("oLLeH");
  });

  it("should throw TypeError for non-string input", () => {
    expect(() => reverse(123)).toThrow(TypeError);
  });

  it("should throw TypeError for null input", () => {
    expect(() => reverse(null)).toThrow(TypeError);
  });

  it("should throw TypeError for undefined input", () => {
    expect(() => reverse(undefined)).toThrow(TypeError);
  });
});

describe("greet()", () => {
  it("should greet with a simple name", () => {
    expect(greet("John")).toBe("Hello John!");
  });

  it("should greet with an empty string", () => {
    expect(greet("")).toBe("Hello !");
  });

  it("should greet with a single character", () => {
    expect(greet("A")).toBe("Hello A!");
  });

  it("should greet with a name containing spaces", () => {
    expect(greet("John Doe")).toBe("Hello John Doe!");
  });

  it("should greet with a name containing special characters", () => {
    expect(greet("O'Brien")).toBe("Hello O'Brien!");
  });

  it("should greet with a name in lowercase", () => {
    expect(greet("alice")).toBe("Hello alice!");
  });

  it("should greet with a name in uppercase", () => {
    expect(greet("BOB")).toBe("Hello BOB!");
  });

  it("should greet with a name containing numbers", () => {
    expect(greet("User123")).toBe("Hello User123!");
  });

  it("should throw TypeError for non-string input", () => {
    expect(() => greet(123)).toThrow(TypeError);
  });

  it("should throw TypeError for null input", () => {
    expect(() => greet(null)).toThrow(TypeError);
  });

  it("should throw TypeError for undefined input", () => {
    expect(() => greet(undefined)).toThrow(TypeError);
  });
});

describe("capitalize()", () => {
  it("should capitalize a simple lowercase string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should capitalize a single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("should return empty string when given empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should capitalize a string that is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("should capitalize the first letter of a string with spaces", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  it("should capitalize the first letter when it's a number at start", () => {
    expect(capitalize("123hello")).toBe("123hello");
  });

  it("should capitalize a string with special characters", () => {
    expect(capitalize("@hello")).toBe("@hello");
  });

  it("should capitalize a string in uppercase", () => {
    expect(capitalize("HELLO")).toBe("HELLO");
  });

  it("should capitalize a mixed case string", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });

  it("should throw TypeError for non-string input", () => {
    expect(() => capitalize(123)).toThrow(TypeError);
  });

  it("should throw TypeError for null input", () => {
    expect(() => capitalize(null)).toThrow(TypeError);
  });

  it("should throw TypeError for undefined input", () => {
    expect(() => capitalize(undefined)).toThrow(TypeError);
  });
});
