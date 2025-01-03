import {
  Kind,
  String,
  List,
  Conditional,
  Function,
  Combinator,
  Object,
} from "hkt-toolbelt";

/**
 * Given an object and a list of keys, return the keys and corresponding values
 * as a 2-tuple list.
 */
const selectEntries = Kind.lazyPipe([
  Kind.pipe([Object.atKey, List.map]),
  Combinator.collate(2),
  List.reverse,
  List.zip,
]);

/**
 * Given a list, return a 2-tuple list where the first element corresponds to
 * the input list elements, and the second element corresponds to the number of
 * times each element appears in the list.
 */
const getCountEntries = Kind.collapse(Kind.pipe([List.count, selectEntries]));

/**
 * Given a string, return the string with duplicate characters replaced with ")",
 * and non-duplicate characters replaced with "(". Capitalization is ignored
 * when considering whether or not a character is duplicate.
 *
 * @param {string} s - The string to encode.
 *
 * @example
 * ```ts
 * const result = duplicateEncoder("recede");
 * // result = "()()()"
 */
export const duplicateEncoder = Kind.pipe([
  String.toLower,
  String.toList,
  getCountEntries,
  List.map(List.at(1)),
  List.map(
    Conditional.if(Conditional.equals(1))(Function.constant("("))(
      Function.constant(")")
    )
  ),
  String.fromList,
]);
