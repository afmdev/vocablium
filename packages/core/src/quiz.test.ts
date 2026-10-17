import assert from "node:assert/strict";
import { test } from "node:test";
import { checkGuess, normalize } from "./quiz.ts";
import type { Word } from "./types.ts";

const form: Word = { id: "1", noun: "Eiswürfelform", article: "die" };

test("normalize ignora mayúsculas, umlauts y ß", () => {
  assert.equal(normalize("  Eiswürfelform "), "eiswurfelform");
  assert.equal(normalize("Straße"), "strasse");
});

test("checkGuess separa artículo y sustantivo", () => {
  assert.deepEqual(checkGuess(form, { article: "die", noun: "eiswurfelform" }), {
    correct: true,
    articleCorrect: true,
    nounCorrect: true,
  });
  assert.deepEqual(checkGuess(form, { article: "der", noun: "Eiswürfelform" }), {
    correct: false,
    articleCorrect: false,
    nounCorrect: true,
  });
});
