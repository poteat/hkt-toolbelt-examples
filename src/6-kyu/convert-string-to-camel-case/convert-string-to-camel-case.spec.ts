import { expectType } from "../../_internal/expectType";
import { convertStringToCamelCase } from "./convert-string-to-camel-case";

describe("convertStringToCamelCase", () => {
  it("should convert a string to camel case", () => {
    expectType(convertStringToCamelCase("hello world")).toBe("helloWorld");
  });

  it("should convert a string to camel case, ignoring spaces", () => {
    expectType(convertStringToCamelCase("hello world ")).toBe("helloWorld");
  });

  it("should convert a string to camel case, ignoring punctuation", () => {
    expectType(convertStringToCamelCase("hello-world")).toBe("helloWorld");
  });

  it("should convert a string to camel case, ignoring numbers", () => {
    expectType(convertStringToCamelCase("hello123world")).toBe("hello123World");
  });

  it("should preserve the first word's case", () => {
    expectType(convertStringToCamelCase("  Hello world")).toBe("HelloWorld");
  });
});
