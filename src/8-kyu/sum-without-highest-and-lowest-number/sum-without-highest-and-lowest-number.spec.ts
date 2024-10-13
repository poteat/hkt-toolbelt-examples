import { expectType } from "../../_internal/expectType";
import { sumWithoutHighestAndLowestNumber } from "./sum-without-highest-and-lowest-number";

describe("sumWithoutHighestAndLowestNumber", () => {
  it("should return the sum of all numbers in the list", () => {
    expectType(sumWithoutHighestAndLowestNumber([1, 2, 3, 4, 5])).toBe(9);
  });

  it("should return the sum of all numbers in the list, even if there are duplicates", () => {
    expectType(sumWithoutHighestAndLowestNumber([1, 2, 3, 4, 5, 5])).toBe(14);
  });

  it("should return the sum of all numbers in the list, even if there are zeroes", () => {
    expectType(sumWithoutHighestAndLowestNumber([0, 0, 0, 0, 0])).toBe(0);
  });
});
