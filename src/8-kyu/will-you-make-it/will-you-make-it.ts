import { Kind, Combinator, List, NaturalNumber } from "hkt-toolbelt";

/**
 * Given a distance, a "miles per gallon" rate, and a number of gallons, return
 * whether the vehicle will make it to the destination.
 *
 * @param {number} distance - The distance to the destination.
 * @param {number} mpg - The "miles per gallon" rate.
 * @param {number} gallons - The number of gallons of fuel.
 *
 * @example
 * ```ts
 * const result = willYouMakeIt(100)(50)(2);
 * //    ^? result = true
 * ```
 *
 * https://www.codewars.com/kata/5861d28f124b35723e00005e
 */
export const willYouMakeIt = Kind.lazyPipe([
  Combinator.collate(3),
  Kind.juxt([
    List.at(0), // distance
    Kind.pipe([List.shift, Kind.uncurry(NaturalNumber.multiply)]), // mpg * gallons
  ]),
  Kind.uncurry(NaturalNumber.isGreaterThanOrEqual),
]);
