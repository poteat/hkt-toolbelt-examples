import { expectType } from "../../_internal/expectType";
import { convertNumberToReversedArrayOfDigits } from "./convert-number-to-reversed-array-of-digits";

describe("convertNumberToReversedArrayOfDigits", () => {
  it("should convert a number to a reversed array of digits", () => {
    const result = convertNumberToReversedArrayOfDigits(123456789);

    expectType(result).toBe([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
