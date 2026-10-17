export type Article = "der" | "die" | "das";

export interface Word {
  id: string;
  /** Sustantivo sin artículo, p.ej. "Eiswürfelform" */
  noun: string;
  article: Article;
  emoji?: string;
  /** URL o data URI del audio */
  audio?: string;
  /** Traducciones por código de idioma: { es: "cubitera" } */
  translations?: Record<string, string>;
}

export interface Deck {
  id: string;
  title: string;
  words: Word[];
}

export interface Guess {
  article?: Article;
  noun: string;
}

export interface GuessResult {
  correct: boolean;
  articleCorrect: boolean;
  nounCorrect: boolean;
}
