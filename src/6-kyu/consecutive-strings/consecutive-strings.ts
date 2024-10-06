import { Kind, String, List } from "hkt-toolbelt";

/**
 * Given a list of strings and a number k, return the longest concatenation of
 * k consecutive strings in the list.
 *
 * @param {number} k - The number of consecutive strings to concatenate.
 * @param {string[]} strings - The list of strings to concatenate.
 *
 * @example
 * ```ts
 * const result = consecutiveStrings(2)(["foo", "quxes", "a", "b"]);
 * //    ^? result = "fooquxes"
 * ```
 *
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e/typescript
 */
export const consecutiveStrings = Kind.lazyPipe([
  List.slidingWindow,
  List.map(String.join("")),
  List.maxBy(String.length),
]);
