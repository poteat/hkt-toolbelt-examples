import { expectType } from "../../_internal/expectType";
import { squareEveryDigit } from "./square-every-digit";

describe("squareEveryDigit", () => {
  it("should square every digit of a number and concatenate each", () => {
    const result = squareEveryDigit(998);
    expectType(result).toBe(818164);
  });
});
