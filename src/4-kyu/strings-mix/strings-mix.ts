import {
  Kind,
  List,
  String,
  Object,
  NaturalNumber,
  Function,
  Number,
  Combinator,
  Integer,
  Conditional,
} from "hkt-toolbelt";

/**
 * Given a string, return a list of 2-tuple where each first element is a lowercase
 * letter, and each second element is the number of times that letter appears
 * in the string, which is greater than 1.
 *
 * Non-lowercase letters are ignored.
 *
 * @param {string} s - The string to count the duplicate letters in.
 *
 * @example
 * ```ts
 * const result = duplicateLowercaseLetterCounts("foobar & FOOBAR");
 * // result = [["o", 2]]
 * ```
 */
const duplicateLowercaseLetterCounts = Kind.pipe([
  String.toList,
  List.filter(String.isLowercaseLetter),
  List.count,
  Object.pickByValue(NaturalNumber.isGreaterThan(1)),
  Object.entries,
]);

/**
 * Given two lists, return three lists: the first two lists are the same as the
 * input lists, but with the common elements removed; the third list is composed
 * of the common elements.
 */
const separateCommon = Kind.juxt([
  Kind.uncurry(List.subtract),
  Kind.uncurry(List.subtractBy),
  Kind.uncurry(List.intersect),
]);

/**
 * Given a 2-tuple of a value and a list, return a list of the same length as
 * the list, where each element of the list has been prepended with the given
 * value.
 *
 * @example
 * ```ts
 * const result = prependEach([1, [[2, 3], [4, 5]]]);
 * // result = [[1, 2, 3], [1, 4, 5]]
 * ```
 */
const prependEach = Kind.pipe([
  Kind.juxt([List.last, Kind.pipe([List.first, List.unshift, List.map])]),
  Kind.uncurry(Kind.apply),
]);

/**
 * If a value is equal to 3, return an equal sign; otherwise, return the value
 * unchanged.
 */
const convertThreeToEqual = Conditional.if(Conditional.equals(3))(
  Function.constant("=")
)(Function.identity);

/**
 * Given a 3-tuple, e.g. [3, "a", 0], return a string of e.g. '1:aaa', where
 * the letters are repeated, and the resultant string is prepended with the
 * increment of the last element of the tuple.
 *
 * If the last element of the tuple is 2, then the string is prepended with an
 * equal sign instead.
 */
const renderPiece = Kind.pipe([
  Kind.juxt([
    Kind.pipe([
      List.last,
      NaturalNumber.increment,
      convertThreeToEqual,
      Number.toString,
    ]),
    Kind.pipe([List.pop, List.reverse, Kind.uncurry(String.repeat)]),
  ]),
  String.join(":"),
]);

/**
 * Given two strings, generate a composite string which represents the
 * differences and similarities between the two strings.
 *
 * The generated string is composed of blocks of the form "X:aaa" where X is
 * either "1", "2", or "=", and 'aaa' is a sequence of equivalent lowercase
 * letters. Each block is separated by a forward slash "/".
 *
 * A block of the form "1:aaa" means that the letter 'a' appears in the first
 * string three times. A block of the form "2:aaa" means that the letter 'a'
 * appears in the second string three times. A block of the form "=:aaa" means
 * that the letter 'a' appears in both strings three times.
 *
 * Blocks are ordered first by the length of the sequence of equivalent letters,
 * then by the letter itself.
 *
 * Non-lowercase letters are ignored.
 */
export const stringsMix = Kind.lazyPipe([
  Combinator.collate(2),
  List.map(duplicateLowercaseLetterCounts),
  separateCommon,
  List.entries,
  List.flatMap(prependEach),
  List.map(List.reverse),
  List.sort(
    List.compareBy([
      Kind.lazyPipe([NaturalNumber.compare, Integer.negate]),
      String.compare,
      NaturalNumber.compare,
    ])
  ),
  List.uniqueBy(List.at(1)),
  List.map(renderPiece),
  String.join("/"),
]);
