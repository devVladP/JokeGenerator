import type { Joke } from "../types/Joke";

export function loadFavoritesFromLocalStorage(): Joke[] {
  const jokes: Joke[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("joke:")) {
      const raw = localStorage.getItem(key);
      if (raw) {
        try {
          jokes.push(JSON.parse(raw));
        } catch (e) {
          console.warn(`Invalid joke JSON at ${key}`, e);
        }
      }
    }
  }

  return jokes;
}
