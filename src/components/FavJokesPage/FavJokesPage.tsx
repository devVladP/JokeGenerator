import { useState } from "react";
import {
  useFilteredJokes,
  type FilterValues,
} from "../../hooks/useFilteredJokes";
import FavJokesList from "../JokesList/FavJokesList";
import FavSideBar from "../Sidebar/FavSidebar";

export default function FavJokesPage() {
  const [filters, setFilters] = useState<FilterValues>({ flags: [] });
  const filteredJokes = useFilteredJokes(filters);

  return (
    <div className="content">
      <FavSideBar onSearch={setFilters} />
      <FavJokesList jokes={filteredJokes} />
    </div>
  );
}
