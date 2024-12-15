import { expectType } from "../../_internal/expectType";
import { sumOfDigits } from "./sum-of-digits";

describe("sumOfDigits", () => {
  it("should return the sum of the digits of a number", () => {
    const result = sumOfDigits(123);
    expectType(result).toBe(6);
  });

  it("should return the sum of the digits of a number, recursively", () => {
    const result = sumOfDigits(1234);
    expectType(result).toBe(1);
  });

  it("should return the sum of the digits of a number, recursively, multiple times", () => {
    const result = sumOfDigits(12345);
    expectType(result).toBe(6);
  });
});
