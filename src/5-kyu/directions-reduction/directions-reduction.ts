import { Kind, List, Combinator } from "hkt-toolbelt";

/**
 * Given a list of directions, as a list of strings "NORTH", "SOUTH", "EAST",
 * "WEST", return a new list of directions, whereby consecutive opposite
 * directions are removed, recursively.
 *
 * For example, given the list ["NORTH", "SOUTH", "SOUTH", "WEST"], the result
 * would be ["SOUTH", "WEST"].
 *
 * @param {string[]} directions - The list of directions to reduce.
 *
 * @example
 * ```ts
 * const result = directionsReduction(["NORTH", "SOUTH", "SOUTH", "WEST"]);
 * // result = ["SOUTH", "WEST"]
 * ```
 *
 * https://www.codewars.com/kata/550f22f4d758534c1100025a/typescript
 */
export const directionsReduction = Combinator.fix(
  Kind.pipe([
    List.removeSequence(["NORTH", "SOUTH"]),
    List.removeSequence(["SOUTH", "NORTH"]),
    List.removeSequence(["EAST", "WEST"]),
    List.removeSequence(["WEST", "EAST"]),
  ])
);
