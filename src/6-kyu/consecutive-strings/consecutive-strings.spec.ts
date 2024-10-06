import { expectType } from "../../_internal/expectType";
import { consecutiveStrings } from "./consecutive-strings";

// ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

describe("consecutiveStrings", () => {
  it("should return the longest consecutive string in a list", () => {
    const result = consecutiveStrings(2)(["foo", "quxes", "a", "b"]);
    expectType(result).toBe("fooquxes");
  });

  it("should return the longest consecutive string in a list", () => {
    const result = consecutiveStrings(2)([
      "tree",
      "foling",
      "trashy",
      "blue",
      "abcdef",
      "uvwxyz",
    ]);
    expectType(result).toBe("folingtrashy");
  });
});
