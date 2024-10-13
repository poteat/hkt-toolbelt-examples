import { convertStringToCamelCase } from "./convert-string-to-camel-case";

describe("convertStringToCamelCase", () => {
  it("should convert a string to camel case", () => {
    expect(convertStringToCamelCase("hello world")).toBe("helloWorld");
  });

  it("should convert a string to camel case, ignoring spaces", () => {
    expect(convertStringToCamelCase("hello world ")).toBe("helloWorld");
  });

  it("should convert a string to camel case, ignoring punctuation", () => {
    expect(convertStringToCamelCase("hello-world")).toBe("helloWorld");
  });

  it("should convert a string to camel case, ignoring numbers", () => {
    expect(convertStringToCamelCase("hello123world")).toBe("hello123World");
  });

  it("should preserve the first word's case", () => {
    expect(convertStringToCamelCase("  Hello world")).toBe("HelloWorld");
  });
});
