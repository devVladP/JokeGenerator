import { configureStore } from "@reduxjs/toolkit";
import jokesReducer from "./jokesSlice";
import { jokeApi } from "../api/jokeApi";

const store = configureStore({
  reducer: {
    jokes: jokesReducer,
    [jokeApi.reducerPath]: jokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokeApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
