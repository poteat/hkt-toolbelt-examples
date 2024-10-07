import { Kind, List, String } from "hkt-toolbelt";

/**
 * Given an index and a string, return the character at the index, capitalized.
 */
const capitalizeIndex = Kind.pipeWeak([
  List.transformAt(String.toUpper),
  List.of,
  List.spliceList([String.split(""), String.join("")])(1)(0),
  Kind.pipe,
]);

/**
 * Given a string, return the indices that correspond to letter in the string.
 */
const getLetterIndices = Kind.pipe([
  String.entries,
  List.filter(Kind.pipe([List.last, String.isLetter])),
  List.map(List.first),
]);

/**
 * Given a lowercase string, return an array of length equal to the number of
 * letters in the string, where each element has exactly one character
 * converted to uppercase, forming a 'wave' pattern.
 *
 * Spaces are skipped.
 *
 * @param {string} str - The string to convert to a wave.
 *
 * @example
 * ```ts
 * const result = mexicanWave("hello");
 * // result = ["Hello", "hEllo", "heLlo", "HelLo", "hellO"]
 *
 * const result2 = mexicanWave("a b c");
 * // result2 = ["A b c", "a B c", "a b C"]
 * ```
 *
 * https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/typescript
 */
export const mexicanWave = Kind.collapse(
  Kind.pipe([
    String.toLower,
    getLetterIndices,
    List.map(capitalizeIndex),
    Kind.juxt,
  ])
);
