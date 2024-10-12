import { Kind, String, List, Conditional, Function } from "hkt-toolbelt";

/**
 * Given a list of words, return whether or not the first word's first letter
 * is uppercase.
 */
const firstWordIsCapitalized = Kind.pipe([
  List.first,
  String.split(""),
  List.first,
  String.isUppercaseLetter,
]);

/**
 * Given a string, return the string in camel case. All words except the first
 * are capitalized. The first word's first letter case is unchanged.
 *
 * @param {string} s - The string to convert.
 *
 * @example
 * ```ts
 * const result = convertStringToCamelCase("hello world");
 * // result = "helloWorld"
 * ```
 *
 * https://www.codewars.com/kata/517abf86da9663f1d2000003/typescript
 */
export const convertStringToCamelCase = Kind.collapse(
  Kind.pipe([
    String.words,
    Conditional.if(firstWordIsCapitalized)(
      Function.constant(String.pascalCase)
    )(Function.constant(String.camelCase)),
  ])
);
