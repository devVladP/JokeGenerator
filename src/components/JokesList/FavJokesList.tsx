import type { Joke } from "../../types/Joke";
import Pagination from "../pagination/Pagination";
import JokesListItem from "./JokesListItem";
import styles from "./jokeList.module.css";
import { paginate } from "../../utils/paginate";
import { useState } from "react";

interface FavJokesListProps {
  jokes: Joke[];
}

const PAGE_SIZE = 5;

export default function FavJokesList({ jokes }: FavJokesListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const { pageItems, totalPages } = paginate(jokes, currentPage, PAGE_SIZE);

  return (
    <div className={styles.section}>
      <ol className={styles["jokes-list"]}>
        {pageItems.map((joke) => (
          <JokesListItem key={joke.id} joke={joke} />
        ))}
      </ol>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
