import { expectType } from "../../_internal/expectType";
import { isTriangle } from "./is-this-a-triangle";

describe("isTriangle", () => {
  it("should return true if the three numbers form a triangle", () => {
    expectType(isTriangle(2)(2)(3)).toBe(true);
  });

  it("should return false if the three numbers do not form a triangle", () => {
    expectType(isTriangle(2)(2)(4)).toBe(false);
  });
});
