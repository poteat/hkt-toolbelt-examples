import { Kind, String, List, Number, NaturalNumber } from "hkt-toolbelt";

/**
 * Replace each letter with its alphabet position.
 *
 * @param {string} s - The string to replace letters with their alphabet position.
 *
 * @example
 * ```ts
 * const result = replaceWithAlphabetPosition("Hello world!");
 * //    ^? "8 5 12 12 15 23 15 18 12 4"
 * ```
 *
 * https://www.codewars.com/kata/546f922b54af40e1e90001da/typescript
 */
export const replaceWithAlphabetPosition = Kind.pipe([
  String.split(""),
  List.filter(String.isLetter),
  List.map(
    Kind.pipe([
      String.toLower,
      String.toCharCode,
      NaturalNumber.subtractBy(String.toCharCode("a")),
      NaturalNumber.increment,
      Number.toString,
    ])
  ),
  String.join(" "),
]);
