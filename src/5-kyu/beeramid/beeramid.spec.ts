import { expectType } from "../../_internal/expectType";
import { beeramid } from "./beeramid";

describe("beeramid", () => {
  it("should return the number of complete layers of the square pyramid that can be made with the given amount of money", () => {
    expectType(beeramid(1000)(5)).toBe(7);
  });

  it("larger case", () => {
    expectType(beeramid(10000)(5)).toBe(17);
  });
});
