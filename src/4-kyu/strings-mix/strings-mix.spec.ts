import { expectType } from "../../_internal/expectType";
import { stringsMix } from "./strings-mix";

describe("stringsMix", () => {
  it("should return the sum of the lengths of the strings", () => {
    const result = stringsMix("mmmmm m nnnnn y&friend&Paul has heavy hats! &")(
      "my frie n d Joh n has ma n y ma n y frie n ds n&"
    );

    expectType(result).toBe(
      "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/=:ee/2:ff/2:ii/2:rr/=:ss"
    );
  });
});
