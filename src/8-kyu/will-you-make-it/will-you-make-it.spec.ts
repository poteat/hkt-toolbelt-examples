import { expectType } from "../../_internal/expectType";
import { willYouMakeIt } from "./will-you-make-it";

describe("willYouMakeIt", () => {
  it("should return false if the vehicle will not make it to the destination", () => {
    const result = willYouMakeIt(100)(10)(5);

    expectType(result).toBe(false);
  });

  it("should return true if the vehicle will make it to the destination", () => {
    const result = willYouMakeIt(100)(50)(2);

    expectType(result).toBe(true);
  });
});
