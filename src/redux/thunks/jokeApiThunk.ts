import { createAsyncThunk } from "@reduxjs/toolkit";
import { jokeApi, type JokeQueryParams } from "../../api/jokeApi";
import { MapJokesRs } from "../../utils/mapJokesRs";
import { addJoke } from "../jokesSlice";

export const fetchAndStoreJokes = createAsyncThunk<
  void,
  { params: JokeQueryParams }
>("jokes/fetchAndStore", async ({ params }, { dispatch }) => {
  const result = await dispatch(jokeApi.endpoints.getJokes.initiate(params));

  if ("data" in result) {
    const rawJokes =
      params.amount && params.amount > 1 ? result.data.jokes : [result.data];
    const jokes = MapJokesRs(rawJokes);
    jokes.forEach((joke) => dispatch(addJoke(joke)));
  } else {
    console.error("Failed to fetch jokes:", result.error);
  }
});
