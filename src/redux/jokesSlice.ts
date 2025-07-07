import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { JokeApiResponse } from "../types/JokeApiResponse";
import type { Joke } from "../types/Joke";

const initialState: Joke[] = [];
const jokePrefix = "joke:";

const jokesSlice = createSlice({
  name: "jokes",
  initialState: initialState,
  reducers: {
    addJoke: (state, action: PayloadAction<JokeApiResponse>) => {
      const isExist = state.some((joke) => joke.id == action.payload.id);
      if (isExist) return;

      const flags = action.payload.flags;

      const activeFlags = Object.entries(flags)
        .filter(([_, value]) => value === true)
        .map(([key]) => key);

      state.push({
        id: action.payload.id,
        type: action.payload.type,
        setup: action.payload.setup,
        delivery: action.payload.delivery,
        joke: action.payload.joke,
        isFavourite: false,
        activeFlags: activeFlags,
      });
    },
    deleteJoke: (state, action) => {
      return state.filter((joke) => joke.id != action.payload);
    },
    makeFavourite: (state, action) => {
      const joke = state.find((joke) => joke.id == action.payload);
      if (joke) {
        joke.isFavourite = true;
        localStorage.setItem(`${jokePrefix}${joke.id}`, JSON.stringify(joke));
      }
    },
    makeUnfavourite: (state, action) => {
      const id = action.payload;
      localStorage.removeItem(`${jokePrefix}${id}`);

      const joke = state.find((joke) => joke.id == action.payload);
      if (joke) {
        joke.isFavourite = false;
      }
    },
  },
});

export const { addJoke, deleteJoke, makeFavourite, makeUnfavourite } =
  jokesSlice.actions;
export default jokesSlice.reducer;
