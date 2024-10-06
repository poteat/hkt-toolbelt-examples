import {
  Kind,
  List,
  Conditional,
  String,
  Function,
  NaturalNumber,
} from "hkt-toolbelt";

/**
 * Given a string or a list of numbers or strings, remove consecutive duplicates
 * and return the result in the order they appear in the original list.
 *
 * @param {string | number[] | string[]} list - The list to remove duplicates from.
 *
 * @example
 * ```ts
 * const strResult = uniqueInOrder("hello world");
 * // strResult = "helo world"
 *
 * const result = uniqueInOrder([1, 2, 3, 1, 2, 3]);
 * // result = [1, 2, 3, 1, 2, 3]
 *
 * const result = uniqueInOrder([1, 1, 1, 2]);
 * // result = [1, 2]
 * ```
 *
 * https://www.codewars.com/kata/54e6533c92449cc251001667/train/typescript
 */
export const uniqueInOrder = Kind.pipe([
  Conditional.if(String.isString)(String.split(""))(Function.identity),
  Conditional.if(Kind.pipe([List.length, NaturalNumber.isLessThanOrEqual(2)]))(
    List.unique
  )(
    Kind.pipe([
      List.slidingWindow(2),
      List.filter(Kind.uncurry(Conditional.notEquals)),
      Kind.juxt([Kind.pipe([List.pop, List.map(List.first)]), List.last]),
      List.flatten,
    ])
  ),
]);
