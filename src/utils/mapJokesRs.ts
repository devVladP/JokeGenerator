import type { JokeApiResponse } from "../types/JokeApiResponse";

export function MapJokesRs(rawJokes: any[]): JokeApiResponse[] {
  const jokes = rawJokes.map(
    (joke): JokeApiResponse => ({
      id: joke.id,
      type: joke.type,
      flags: joke.flags,
      setup: joke.setup ?? null,
      delivery: joke.delivery ?? null,
      joke: joke.joke ?? null,
    })
  );

  return jokes;
}
