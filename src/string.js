export function reverse(s) {
  if (typeof s !== "string") {
    throw new TypeError("reverse(s): s must be a string");
  }

  return s.split("").reverse().join("");
}

export function greet(s) {
  if (typeof s !== "string") {
    throw new TypeError("greet(s): s must be a string");
  }

  return "Hello " + s + "!";
}

export function capitalize(s) {
  if (typeof s !== "string") {
    throw new TypeError("capitalize(s): s must be a string");
  }

  if (s.length === 0) return s;
  return s[0].toUpperCase() + s.slice(1);
}
