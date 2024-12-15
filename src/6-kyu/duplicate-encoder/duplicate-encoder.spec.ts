import { expectType } from "../../_internal/expectType";
import { duplicateEncoder } from "./duplicate-encoder";

describe("duplicateEncoder", () => {
  it("should encode a string", () => {
    expectType(duplicateEncoder("recede")).toBe("()()()");
  });

  it("should encode a string, ignoring capitalization", () => {
    expectType(duplicateEncoder("RecedE")).toBe("()()()");
  });

  it("should encode a string", () => {
    expectType(duplicateEncoder("Success")).toBe(")())())");
  });
});
