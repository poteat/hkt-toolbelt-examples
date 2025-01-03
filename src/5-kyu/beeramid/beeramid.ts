import { Kind, Function, NaturalNumber, List, Loop } from "hkt-toolbelt";

/**
 * Given a natural number, return the sum of the squares of the first n natural
 * numbers.
 *
 * @param {number} n - The number of natural numbers to sum.
 *
 * @example
 * ```ts
 * const T0 = sumNSquared(2);
 * //    ^? 5
 * ```
 */
export const sumNSquared = Kind.pipe([
  Kind.juxt([
    Function.identity,
    NaturalNumber.increment,
    Kind.pipe([NaturalNumber.multiply(2), NaturalNumber.increment]),
  ]),
  List.reduce(NaturalNumber.multiply)(1),
  NaturalNumber.divideBy(6),
]);

/**
 * Given a target natural number, return the first natural number whose sum of
 * squares is greater than the target.
 *
 * Loop from 1 upwards until the computed sum of squares is greater than the
 * target.
 *
 * @param {number} target - The target sum of squares.
 * @param {number} n - The current natural number.
 *
 * @example
 * ```ts
 * const T0 = inverseSumNSquared(100)
 * //    ^? 7
 * ```
 */
const inverseSumNSquared = Kind.pipeWeak([
  NaturalNumber.isGreaterThanOrEqual,
  List.pushValue([sumNSquared]),
  Kind.pipe,
  Loop.until,
  Kind.apply(NaturalNumber.increment),
  Kind.apply(1),
]);

/**
 * Given two natural numbers, representing an amount of money and a per-unit
 * price respectively, return the number of complete layers of the square
 * pyramid that can be made with the given amount of money.
 *
 * @param {number} money - The amount of money to make the pyramid with.
 * @param {number} price - The price of each unit.
 *
 * @example
 *
 * In the below example, $1000 for 5$ each results in 200 units, which can form
 * 7 complete layers (formed from 140 units with 60 left over).
 *
 * ```ts
 * const T0 = beeramid(1000)(5)
 * //    ^? 7
 * ```
 */
export const beeramid = Kind.lazyPipe([
  NaturalNumber.divide,
  inverseSumNSquared,
  NaturalNumber.decrement,
]);
