import type { Joke } from "../types/Joke";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Joke[] = [];
const favJokePrefix = "joke:";

const favJokeSlice = createSlice({
  name: "favJokes",
  initialState: initialState,
  reducers: {
    setFavJokes: (state, action: PayloadAction<Joke[]>) => {
      return action.payload;
    },
    addFavJoke: (state, action: PayloadAction<Joke>) => {
      const isExist = state.some((joke) => joke.id == action.payload.id);
      if (isExist) return;

      state.push({
        id: action.payload.id,
        type: action.payload.type,
        setup: action.payload.setup,
        delivery: action.payload.delivery,
        joke: action.payload.joke,
        isFavourite: true,
        activeFlags: action.payload.activeFlags,
      });

      const joke = state.find((j) => j.id == action.payload.id);
      if (joke)
        localStorage.setItem(
          `${favJokePrefix}${joke.id}`,
          JSON.stringify(joke)
        );
    },
    deleteFavJoke: (state, action) => {
      const id = action.payload;
      localStorage.removeItem(`${favJokePrefix}${id}`);

      return state.filter((joke) => joke.id != action.payload);
    },
  },
});

export const { addFavJoke, deleteFavJoke, setFavJokes } = favJokeSlice.actions;
export default favJokeSlice.reducer;
