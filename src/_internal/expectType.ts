import { Type } from "hkt-toolbelt";

export function expectType<T>(value: T) {
  return {
    toBe: <U extends T>(expected: Type._$infer<U>) => {
      expect(value).toStrictEqual(expected);
    },
  };
}
