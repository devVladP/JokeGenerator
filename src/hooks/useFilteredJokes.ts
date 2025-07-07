import { useEffect, useState } from "react";
import type { Joke } from "../types/Joke";

export interface FilterValues {
  type?: "single" | "twopart" | undefined;
  flags: string[];
}

export function useFilteredJokes(filter: FilterValues) {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const allJokes: Joke[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("joke:")) {
        const raw = localStorage.getItem(key);
        if (!raw) continue;

        try {
          const parsed: Joke = JSON.parse(raw);
          allJokes.push(parsed);
        } catch {
          console.warn("Invalid JSON at", key);
        }
      }
    }

    const filtered = allJokes.filter((joke) => {
      if (filter.type && joke.type !== filter.type) return false;

      for (const flag of filter.flags) {
        if (!joke.activeFlags.includes(flag)) {
          return false;
        }
      }

      return true;
    });

    setJokes(filtered);
  }, [filter]);

  return jokes;
}
