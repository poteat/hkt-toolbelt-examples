import { expectType } from "../../_internal/expectType";
import { reverseWords } from "./reverse-words";

describe("reverseWords", () => {
  it("should reverse each word in a string", () => {
    expectType(reverseWords("hello world")).toBe("olleh dlrow");
  });
});
