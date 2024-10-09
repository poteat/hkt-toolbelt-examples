import { Kind, NaturalNumber, Boolean } from "hkt-toolbelt";

/**
 * Given three numbers, determine if they form a triangle of the specified
 * side lengths.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 *
 * @example
 * ```ts
 * const result = isTriangle(2)(2)(3);
 * // result = true
 *
 * const result = isTriangle(2)(2)(4);
 * // result = false
 * ```
 *
 * https://www.codewars.com/kata/56606694ec01347ce800001b/train/typescript
 */
export const isTriangle = Kind.lazyPipe([
  Kind.juxtN([
    Kind.lazyPipe([NaturalNumber.difference, NaturalNumber.isGreaterThan]),
    Kind.lazyPipe([NaturalNumber.add, NaturalNumber.isLessThan]),
  ]),
  Boolean.andAll,
]);
