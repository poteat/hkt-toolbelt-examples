import { Kind, String, List, Combinator, NaturalNumber } from "hkt-toolbelt";

/**
 * Given three numbers between 0 and 255, return the equivalent hex color.
 *
 * @param {number} r - The red value.
 * @param {number} g - The green value.
 * @param {number} b - The blue value.
 *
 * @example
 * ```ts
 * const result = rgbToHex(255)(0)(0);
 * // result = "FF0000"
 * ```
 */
export const rgbToHex = Kind.lazyPipe([
  Combinator.collate(3),
  List.map(Kind.pipe([NaturalNumber.toHex, String.padStart(2)("0")])),
  String.fromList,
]);
