import { expectType } from "../../_internal/expectType";
import { rgbToHex } from "./rgb-to-hex-conversion";

describe("rgbToHex", () => {
  it("should return the equivalent hex color", () => {
    expectType(rgbToHex(255)(0)(0)).toBe("ff0000");
  });

  it("should return the equivalent hex color, with leading zeroes", () => {
    expectType(rgbToHex(0)(0)(255)).toBe("0000ff");
  });

  it("should return the equivalent hex color", () => {
    expectType(rgbToHex(42)(99)(107)).toBe("2a636b");
  });
});
