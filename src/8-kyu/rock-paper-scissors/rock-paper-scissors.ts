import { Kind, Object } from "hkt-toolbelt";

/**
 * Given two player inputs, return the result of the rock paper scissors game.
 *
 * @param {string} player1 - The first player's input.
 * @param {string} player2 - The second player's input.
 *
 * @example
 * ```ts
 * const result = rockPaperScissors("rock", "scissors");
 * // result = "Player 1 won!"
 *
 * const drawResult = rockPaperScissors("rock", "rock");
 * // drawResult = "Draw!"
 * ```
 *
 * https://www.codewars.com/kata/5672a98bdbdd995fad00000f/typescript
 */
export const rockPaperScissors = Kind.curry(2)(
  Object.atPathInObject({
    rock: {
      scissors: "Player 1 won!",
      rock: "Draw!",
      paper: "Player 2 won!",
    },
    paper: {
      rock: "Player 2 won!",
      scissors: "Player 1 won!",
      paper: "Draw!",
    },
    scissors: {
      rock: "Player 1 won!",
      paper: "Player 2 won!",
      scissors: "Draw!",
    },
  } as const)
);
