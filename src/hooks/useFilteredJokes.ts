import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setFavJokes } from "../redux/favJokesSlice";
import { loadFavoritesFromLocalStorage } from "../utils/storageUtils";

export interface FilterValues {
  type?: "single" | "twopart" | undefined;
  flags: string[];
}

export function useFilteredJokes(filter: FilterValues) {
  const dispatch = useDispatch();
  const allJokes = useSelector((state: RootState) => state.favJokes);

  useEffect(() => {
    let filtered = allJokes.filter((joke) => {
      if (filter.type && joke.type !== filter.type) return false;

      for (const flag of filter.flags) {
        if (!joke.activeFlags.includes(flag)) {
          return false;
        }
      }

      return true;
    });

    if (filter.type == null && filter.flags.length == 0) {
      filtered = loadFavoritesFromLocalStorage();
    }

    dispatch(setFavJokes(filtered));
  }, [filter]);

  return allJokes;
}
