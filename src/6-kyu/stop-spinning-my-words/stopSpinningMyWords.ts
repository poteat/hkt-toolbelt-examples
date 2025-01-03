import {
  Kind,
  String,
  List,
  Conditional,
  Function,
  NaturalNumber,
  Iso,
} from "hkt-toolbelt";

/**
 * Given a string consisting of words, for each word, return the word reversed
 * if the word has a length of five or more, otherwise unchanged.
 */
export const stopSpinningMyWords = Iso.String.words(
  List.map(
    Conditional.if(Kind.pipe([String.length, NaturalNumber.isGreaterThan(4)]))(
      String.reverse
    )(Function.identity)
  )
);
