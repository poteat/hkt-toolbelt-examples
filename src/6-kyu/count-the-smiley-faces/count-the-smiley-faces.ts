import { Kind, List, Conditional } from "hkt-toolbelt";

/**
 * Given a string, return whether or not it is a smiley face.
 */
const isSmileyFace = Kind.pipe([
  List.indexOf,
  Kind.apply([
    ":)",
    ";)",
    ":-)",
    ";-)",
    ":~)",
    ";~)",
    ":D",
    ";D",
    ":-D",
    ";-D",
    ":~D",
    ";~D",
  ]),
  Conditional.notEquals(-1),
]);

/**
 * Given a list, return the number of smiley faces in the list. A smiley
 * face starts with eyes (i.e. `:` or `;`), optionally has a nose (i.e. `-` or
 * `~`), and optionally has a mouth (i.e. `)` or `D`).
 *
 * @param {string[]} list - The list to count the smiley faces in.
 *
 * @example
 * ```ts
 * const result = countTheSmileyFaces([":)", ":-)", ":-D"]);
 * // result = 3
 * ```
 *
 * https://www.codewars.com/kata/583203e6eb35d7980400002a/typescript
 */
export const countTheSmileyFaces = Kind.pipe([
  List.filter(isSmileyFace),
  List.length,
]);
