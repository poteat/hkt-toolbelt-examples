import { Kind, String, List, Object } from "hkt-toolbelt";

/**
 * Given a string, return whether or not the number of 'x' characters is equal
 * to the number of 'o' characters, following case insensitivity.
 *
 * @param {string} s - The string to check.
 *
 * @example
 * ```ts
 * const result = exesAndOhs("xoxoxo");
 * // result = true
 * ```
 *
 * https://www.codewars.com/kata/55908aad6620c066bc00002a/typescript
 */
export const exesAndOhs = Kind.pipe([
  String.toLower,
  String.split(""),
  List.count,
  Object.defaults({ x: 0, o: 0 }),
  Object.values,
  List.same,
]);
