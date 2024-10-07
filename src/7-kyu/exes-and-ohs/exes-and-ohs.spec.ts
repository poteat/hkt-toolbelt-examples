import { expectType } from "../../_internal/expectType";
import { exesAndOhs } from "./exes-and-ohs";

describe("exesAndOhs", () => {
  it("should return true if the number of 'x' characters is equal to the number of 'o' characters", () => {
    expectType(exesAndOhs("xoxoxo")).toBe(true);
  });

  it("should return false if the number of 'x' characters is not equal to the number of 'o' characters", () => {
    expectType(exesAndOhs("xoxoo")).toBe(false);
  });

  it("should return true if the string is empty", () => {
    expectType(exesAndOhs("")).toBe(true);
  });

  it("should return false if only composed of 'x' characters", () => {
    expectType(exesAndOhs("x")).toBe(false);
  });

  it("is case insensitive", () => {
    expectType(exesAndOhs("XOXOxO")).toBe(true);
  });
});
