import { Kind, NaturalNumber } from "hkt-toolbelt";

/**
 * Given a number, return the sum of its digits recursively until it reaches a
 * single digit.
 *
 * @param {number} n - The number to sum the digits of.
 *
 * @example
 * ```ts
 * const result = sumOfDigits(123);
 * // result = 6
 * ```
 *
 * https://www.codewars.com/kata/541c8630095125aba6000c00/typescript
 */
export const sumOfDigits = Kind.pipe([
  NaturalNumber.decrement,
  NaturalNumber.moduloBy(9),
  NaturalNumber.increment,
]);
