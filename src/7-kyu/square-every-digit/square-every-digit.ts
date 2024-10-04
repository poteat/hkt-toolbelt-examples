import { Kind, NaturalNumber, List, String, Number } from "hkt-toolbelt";

/**
 * Square every digit of a number and concatenate each.
 *
 * @param n - The number to square-each and concatenate.
 *
 * @example
 * ```ts
 * const result = squareEveryDigit(998);
 * // result = "818164"
 * ```
 *
 * https://www.codewars.com/kata/546e2562b03326a88e000020/train/typescript
 */
export const squareEveryDigit = Kind.pipe([
  NaturalNumber.toList,
  List.map(NaturalNumber.square),
  List.map(Number.toString),
  String.join(""),
]);

const result = squareEveryDigit(998);
