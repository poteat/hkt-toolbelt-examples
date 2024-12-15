import {
  Kind,
  String,
  List,
  Conditional,
  Function,
  NaturalNumber,
} from "hkt-toolbelt";

/**
 * Given a string consisting of words, for each word, return the word reversed
 * if the word has a length of five or more, otherwise unchanged.
 */
export const stopSpinningMyWords = Kind.pipe([
  String.split(" "),
  List.map(
    Conditional.if(Kind.pipe([String.length, NaturalNumber.isGreaterThan(4)]))(
      String.reverse
    )(Function.identity)
  ),
  String.join(" "),
]);
