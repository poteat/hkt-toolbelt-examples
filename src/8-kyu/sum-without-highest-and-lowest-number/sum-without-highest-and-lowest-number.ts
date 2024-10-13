import { Kind, List, NaturalNumber, Function } from "hkt-toolbelt";

/**
 * Given a list of numbers, return the list with the lowest element removed.
 */
const removeLowestElement = Kind.collapse(
  Kind.pipe([List.minIndexBy(Function.identity), List.removeIndex])
);

/**
 * Given a list of numbers, return the list with the highest element removed.
 */
const removeHighestElement = Kind.collapse(
  Kind.pipe([List.maxIndexBy(Function.identity), List.removeIndex])
);

/**
 * Given a list of numbers, return the list with the highest and lowest
 * elements removed.
 */
const removeLowestAndHighestElement = Kind.pipe([
  removeLowestElement,
  removeHighestElement,
]);

/**
 * Given a list of numbers, return the sum of all numbers in the list.
 */
const sumList = List.reduce(NaturalNumber.add)(0);

/**
 * Given a list of numbers, return the sum of all numbers except the highest
 * and lowest. The highest or lowest number is just a single element, even if
 * more instances of that value exist in the list.
 *
 * @param {number[]} numbers - The list of numbers.
 *
 * @example
 * ```ts
 * const result = sumWithoutHighestAndLowestNumber([1, 2, 3, 4, 5]);
 * // result = 9
 * ```
 *
 * https://www.codewars.com/kata/576b93db1129fcf2200001e6/typescript
 */
export const sumWithoutHighestAndLowestNumber = Kind.pipe([
  removeLowestAndHighestElement,
  sumList,
]);
