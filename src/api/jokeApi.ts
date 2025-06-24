import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type JokeQueryParams = {
  category?: string;
  amount?: number;
  blacklistFlags?: string;
};

export const jokeApi = createApi({
  reducerPath: "jokeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://v2.jokeapi.dev/joke/" }),
  endpoints: (build) => ({
    getJokes: build.query<any, JokeQueryParams>({
      query: ({ category, amount = 1, blacklistFlags = "" }) => {
        const params = new URLSearchParams();
        console.log("enter getJokes");
        if (amount > 1) params.append("amount", amount.toString());
        if (blacklistFlags) params.append("blacklistFlags", blacklistFlags);
        if (!category) category = "Any";

        const paramString = params.toString();
        console.log(paramString);
        console.log(`${category}${paramString ? `?${paramString}` : ""}`);
        return `${category}${paramString ? `?${paramString}` : ""}`;
      },
      keepUnusedDataFor: 0,
      forceRefetch() {
        return true;
      },
    }),
  }),
});

export const { useGetJokesQuery } = jokeApi;
