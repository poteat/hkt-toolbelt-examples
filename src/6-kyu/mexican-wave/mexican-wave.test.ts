import { mexicanWave } from "./mexican-wave";

describe("mexicanWave", () => {
  it("should capitalize the letter at the index", () => {
    expect(mexicanWave("hello")).toEqual([
      "Hello",
      "hEllo",
      "heLlo",
      "HelLo",
      "hellO",
    ]);
  });

  it("should capitalize the letter at the index, skipping spaces", () => {
    expect(mexicanWave("a b c")).toEqual(["A b c", "a B c", "a b C"]);
  });

  it("can handle multiple spaces", () => {
    expect(mexicanWave("a  b c")).toEqual(["A  b c", "a  B c", "a  b C"]);
  });

  it("can handle only one letter", () => {
    expect(mexicanWave("a")).toEqual(["A"]);
  });

  it("can handle empty string", () => {
    expect(mexicanWave("")).toEqual([]);
  });
});
