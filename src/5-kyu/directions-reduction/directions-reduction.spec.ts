import { expectType } from "../../_internal/expectType";
import { directionsReduction } from "./directions-reduction";

describe("directionsReduction", () => {
  it("should remove consecutive opposite directions", () => {
    expectType(directionsReduction(["NORTH", "SOUTH", "SOUTH", "WEST"])).toBe([
      "SOUTH",
      "WEST",
    ]);
  });

  it("should remove consecutive opposite directions, recursively", () => {
    expectType(
      directionsReduction(["NORTH", "SOUTH", "SOUTH", "NORTH", "NORTH"])
    ).toBe(["NORTH"]);
  });

  it("should remove consecutive opposite directions, recursively, multiple times", () => {
    expectType(
      directionsReduction([
        "NORTH",
        "SOUTH",
        "SOUTH",
        "NORTH",
        "NORTH",
        "EAST",
        "WEST",
        "SOUTH",
      ])
    ).toBe([]);
  });
});
