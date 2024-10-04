import { expectType } from "../../_internal/expectType";
import { takeATenMinutesWalk } from "./take-a-ten-minutes-walk";

describe("takeATenMinutesWalk", () => {
  it("going north a bunch does not return to the origin", () => {
    expectType(
      takeATenMinutesWalk(["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"])
    ).toBe(false);
  });

  it("going north and then south is not a long enough walk", () => {
    expectType(takeATenMinutesWalk(["n", "s"])).toBe(false);
  });

  it("going north and south a bunch is a long enough walk", () => {
    expectType(
      takeATenMinutesWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBe(true);
  });
});
