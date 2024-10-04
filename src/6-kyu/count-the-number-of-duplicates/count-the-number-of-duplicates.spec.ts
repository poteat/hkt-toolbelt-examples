import { expectType } from "../../_internal/expectType";
import { countTheNumberOfDuplicates } from "./count-the-number-of-duplicates";

describe("countTheNumberOfDuplicates", () => {
  it("should count the number of duplicate characters", () => {
    expectType(countTheNumberOfDuplicates("abcABcd")).toBe(3);
  });
  it("should handle no-duplicate case", () => {
    expectType(countTheNumberOfDuplicates("abc")).toBe(0);
  });
});
