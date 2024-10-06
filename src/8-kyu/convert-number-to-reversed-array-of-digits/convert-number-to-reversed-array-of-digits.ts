import { Kind, NaturalNumber, List } from "hkt-toolbelt";

/**
 * Convert a natural number to a reversed array of digits.
 *
 * @param {number} n - The number to convert.
 *
 * @example
 * ```ts
 * const result = convertNumberToReversedArrayOfDigits(123456789);
 * // result = [9, 8, 7, 6, 5, 4, 3, 2, 1]
 * ```
 *
 * https://www.codewars.com/kata/5583090cbe83f4fd8c000051/typescript
 */
export const convertNumberToReversedArrayOfDigits = Kind.pipe([
  NaturalNumber.digits,
  List.reverse,
]);
