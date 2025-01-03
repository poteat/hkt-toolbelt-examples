import { expectType } from "../../_internal/expectType";
import { simplePigLatin } from "./simple-pig-latin";

describe("simplePigLatin", () => {
  it("should convert a string to pig latin", () => {
    expectType(simplePigLatin("hello")).toBe("ellohay");
  });

  it("should convert a string to pig latin, ignoring spaces", () => {
    expectType(simplePigLatin("hello world")).toBe("ellohay orldway");
  });
});
