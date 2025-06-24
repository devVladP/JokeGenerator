import type { Joke } from "./Joke";

export type FavouriteJoke = Omit<Joke, "isFavourite">;
