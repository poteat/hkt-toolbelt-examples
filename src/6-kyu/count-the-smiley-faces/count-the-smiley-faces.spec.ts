import { expectType } from "../../_internal/expectType";
import { countTheSmileyFaces } from "./count-the-smiley-faces";

describe("countTheSmileyFaces", () => {
  it("should count the number of smiley faces in a list", () => {
    expectType(countTheSmileyFaces([":)", ":-)", ":-D"])).toBe(3);
  });

  it("should not count non-smiley faces", () => {
    expectType(countTheSmileyFaces([":)", ":-)", ":^O", ":)"])).toBe(3);
  });
});
