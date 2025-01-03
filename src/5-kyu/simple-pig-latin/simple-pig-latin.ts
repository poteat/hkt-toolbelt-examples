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
 * Given a word, return the word with the first letter moved to the end of the
 * word, and "ay" appended to the end of the word. This only applies to words
 * with more than one letter.
 */
const pigLatinWord = Conditional.if(
  Kind.pipe([String.length, NaturalNumber.isGreaterThan(1)])
)(
  Kind.lazyPipe([
    Kind.juxt([String.first, String.tail]),
    Kind.uncurry(String.append),
    String.append("ay"),
  ])
)(Function.identity);

/**
 * Given a string, convert it to pig latin by moving the first letter of each
 * word to the end of the word, and appending "ay" to the end of the word.
 */
export const simplePigLatin = Iso.String.words(List.map(pigLatinWord));
