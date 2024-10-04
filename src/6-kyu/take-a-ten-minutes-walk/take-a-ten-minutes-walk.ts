import {
  Kind,
  NaturalNumber,
  List,
  Conditional,
  Object,
  Loop,
  Boolean,
} from "hkt-toolbelt";

/**
 * Given a cardinal direction and [x, y] coordinates, return the new coordinates.
 */
const takeWalkStep = Object.atKey({
  n: List.transformAt(NaturalNumber.increment)(1),
  e: List.transformAt(NaturalNumber.increment)(0),
  s: List.transformAt(NaturalNumber.decrement)(1),
  w: List.transformAt(NaturalNumber.decrement)(0),
});

/**
 * Given a `[[x, y], directions]` 2-tuple, return the new coordinates.
 */
const performWalkStep = Kind.pipe([
  Kind.juxt([Kind.pipe([List.last, List.first]), List.first]),
  Kind.uncurry(takeWalkStep),
]);

/**
 * Given a 2-tuple of [[x, y], directions], loop until all directions are
 * exhausted, then return the final 2-tuple of [[x, y], []].
 */
const takeWalkLoop = Loop.until(Kind.pipe([List.last, List.isEmpty]))(
  Kind.juxt([performWalkStep, Kind.pipe([List.last, List.shift])])
);

/**
 * Given a list of cardinal directions, return [x, y] coordinates that represent
 * taking a walk from the origin.
 */
const takeWalk = Kind.pipe([
  List.pushValue([[0, 0]]),
  takeWalkLoop,
  List.first,
]);

/**
 * Given a list of cardinal directions, determine if the coordinates return
 * back to the origin at the end of the walk.
 */
const doesWalkReturnToOrigin = Kind.pipe([
  takeWalk,
  Conditional.equals([0, 0]),
]);

/**
 * Given a list, determine if it is of length 10.
 */
const isOfLengthTen = Kind.pipe([List.length, Conditional.equals(10)]);

/**
 * Given a list of cardinal directions, a walk is "valid" if it returns to the
 * original starting location and traverses ten 'blocks'.
 *
 * @param {string[]} directions - The list of cardinal directions to take a walk.
 *
 * https://www.codewars.com/kata/54da539698b8a2ad76000228/train/typescript
 */
export const takeATenMinutesWalk = Kind.pipe([
  Kind.juxt([doesWalkReturnToOrigin, isOfLengthTen]),
  Boolean.andAll,
]);
