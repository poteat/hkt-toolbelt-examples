import { expectType } from "../../_internal/expectType";
import { stopSpinningMyWords } from "./stopSpinningMyWords";

describe("stopSpinningMyWords", () => {
  it("should reverse words that are longer than five characters", () => {
    expectType(stopSpinningMyWords("hello world")).toBe("olleh dlrow");
  });

  it(`"Hey fellow warriors"  --> "Hey wollef sroirraw"`, () => {
    expectType(stopSpinningMyWords("Hey fellow warriors")).toBe(
      "Hey wollef sroirraw"
    );
  });

  it(`"This is another test" --> "This is rehtona test"`, () => {
    expectType(stopSpinningMyWords("This is another test")).toBe(
      "This is rehtona test"
    );
  });
});
