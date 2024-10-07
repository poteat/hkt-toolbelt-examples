import { expectType } from "../../_internal/expectType";
import { rockPaperScissors } from "./rock-paper-scissors";

describe("rockPaperScissors", () => {
  it("should return the result of the rock paper scissors game", () => {
    expectType(rockPaperScissors("rock")("scissors")).toBe("Player 1 won!");
    expectType(rockPaperScissors("rock")("rock")).toBe("Draw!");
    expectType(rockPaperScissors("rock")("paper")).toBe("Player 2 won!");
  });
});
