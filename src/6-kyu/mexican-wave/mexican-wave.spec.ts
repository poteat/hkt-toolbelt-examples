import { expectType } from "../../_internal/expectType";
import { mexicanWave } from "./mexican-wave";

describe("mexicanWave", () => {
  it("should capitalize the letter at the index", () => {
    expectType(mexicanWave("hello")).toBe([
      "Hello",
      "hEllo",
      "heLlo",
      "helLo",
      "hellO",
    ]);
  });

  it("should capitalize the letter at the index, skipping spaces", () => {
    expectType(mexicanWave("a b c")).toBe(["A b c", "a B c", "a b C"]);
  });

  it("can handle multiple spaces", () => {
    expectType(mexicanWave("a  b c")).toBe(["A  b c", "a  B c", "a  b C"]);
  });

  it("can handle only one letter", () => {
    expectType(mexicanWave("a")).toBe(["A"]);
  });

  it("can handle empty string", () => {
    expectType(mexicanWave("")).toBe([]);
  });
});
