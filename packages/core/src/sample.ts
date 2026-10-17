import type { Deck } from "./types.ts";

/** Mazo de prueba hasta que haya datos reales. */
export const sampleDeck: Deck = {
  id: "kuche",
  title: "Küche",
  words: [
    { id: "1", noun: "Eiswürfelform", article: "die", emoji: "🧊", translations: { es: "cubitera" } },
    { id: "2", noun: "Kühlschrank", article: "der", emoji: "🧊", translations: { es: "nevera" } },
    { id: "3", noun: "Messer", article: "das", emoji: "🔪", translations: { es: "cuchillo" } },
  ],
};
