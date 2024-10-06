import { Kind, String, List } from "hkt-toolbelt";

/**
 * Given a string, return the string with each word reversed.
 *
 * @param {string} str - The string to reverse.
 *
 * @example
 * ```ts
 * const result = reverseWords("hello world");
 * //    ^? result = "olleh dlrow"
 * ```
 *
 * https://www.codewars.com/kata/55a1c0d8d0f8b1a8e80001f9/typescript
 */
export const reverseWords = Kind.pipe([
  String.split(" "),
  List.map(String.reverse),
  String.join(" "),
]);
