import { Kind, List, String } from "hkt-toolbelt";

/**
 * Count the number of duplicate case-insensitive characters in a string.
 *
 * @param {string} s - The string to count the number of duplicates.
 * @example
 * ```ts
 * const result = countTheNumberOfDuplicates("abcABcd");
 * // result = 3
 * ```
 *
 * https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/typescript
 */
export const countTheNumberOfDuplicates = Kind.pipe([
  String.toLower,
  String.split(""),
  List.duplicates,
  List.length,
]);
