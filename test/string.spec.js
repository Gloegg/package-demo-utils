import { describe, it, expect } from "vitest";
import { reverse, greet } from "../src/string.js";

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
});
