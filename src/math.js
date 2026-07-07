// sum all numbers
export function sum(...numbers) {
  return numbers.reduce((result, number) => result + number, 0);
}

// return the average of all numbers, raise an exception if no numbers are given
export function avg(...numbers) {
  if (numbers.length === 0)
    throw new TypeError("average(numbers): at least one number expected");

  return sum(...numbers) / numbers.length;
}

export function multiply(...numbers) {
  return numbers.reduce((result, number) => result * number, 1);
}
