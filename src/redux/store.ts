import { configureStore } from "@reduxjs/toolkit";
import jokesReducer from "./jokesSlice";
import favJokesReducer from "./favJokesSlice";
import { jokeApi } from "../api/jokeApi";

const store = configureStore({
  reducer: {
    jokes: jokesReducer,
    [jokeApi.reducerPath]: jokeApi.reducer,
    favJokes: favJokesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokeApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
