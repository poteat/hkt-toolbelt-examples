import { countTheSmileyFaces } from "./count-the-smiley-faces";

describe("countTheSmileyFaces", () => {
  it("should count the number of smiley faces in a list", () => {
    expect(countTheSmileyFaces([":)", ":-)", ":-D"])).toBe(3);
  });

  it("should not count non-smiley faces", () => {
    expect(countTheSmileyFaces([":)", ":-)", ":^O", ":)"])).toBe(3);
  });
});
