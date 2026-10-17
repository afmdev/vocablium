import type { Guess, GuessResult, Word } from "./types.ts";

/** Minúsculas, sin acentos ni espacios dobles, ß -> ss. Para comparar respuestas. */
export function normalize(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, " ");
}

export function fullForm(word: Word): string {
  return `${word.article} ${word.noun}`;
}

export function checkGuess(word: Word, guess: Guess): GuessResult {
  const nounCorrect = normalize(guess.noun) === normalize(word.noun);
  const articleCorrect = guess.article === word.article;
  return { nounCorrect, articleCorrect, correct: nounCorrect && articleCorrect };
}
