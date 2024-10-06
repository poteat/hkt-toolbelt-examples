import { expectType } from "../../_internal/expectType";
import { uniqueInOrder } from "./unique-in-order";

describe("uniqueInOrder", () => {
  it("should return a list of unique elements, in the order they appear in the original list", () => {
    expectType(uniqueInOrder("hello world")).toBe([
      "h",
      "e",
      "l",
      "o",
      " ",
      "w",
      "o",
      "r",
      "l",
      "d",
    ]);
    expectType(uniqueInOrder([1, 2, 3, 1, 2, 3])).toBe([1, 2, 3, 1, 2, 3]);
    expectType(uniqueInOrder([1, 1, 1, 2])).toBe([1, 2]);
  });

  it("can handle strings of length 0, 1, or 2", () => {
    expectType(uniqueInOrder("")).toBe([]);
    expectType(uniqueInOrder("a")).toBe(["a"]);
    expectType(uniqueInOrder("aa")).toBe(["a"]);
    expectType(uniqueInOrder("ab")).toBe(["a", "b"]);
  });
});
