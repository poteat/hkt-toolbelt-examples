import { expectType } from "../../_internal/expectType";
import { squareEveryDigit } from "./square-every-digit";

describe("squareEveryDigit", () => {
  it("should square every digit of a number and concatenate each", () => {
    expectType(squareEveryDigit(998)).toBe("818164");
  });
});
