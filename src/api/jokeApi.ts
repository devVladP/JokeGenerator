import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type JokeQueryParams = {
  category?: string;
  amount?: number;
  blacklistFlags?: string;
  language?: string;
  search?: string;
  type: "single" | "twopart" | undefined;
};

export const jokeApi = createApi({
  reducerPath: "jokeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://v2.jokeapi.dev/joke/" }),
  endpoints: (build) => ({
    getJokes: build.query<any, JokeQueryParams>({
      query: ({
        category,
        amount = 1,
        blacklistFlags = "",
        language,
        search,
        type,
      }) => {
        const params = new URLSearchParams();
        console.log("enter getJokes");
        if (amount > 1) params.append("amount", amount.toString());
        if (blacklistFlags) params.append("blacklistFlags", blacklistFlags);
        if (language) params.append("lang", language);
        if (search) params.append("contains", search);
        if (type) params.append("type", type);
        console.log(type);
        if (!category) category = "Any";

        const paramString = params.toString();
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
