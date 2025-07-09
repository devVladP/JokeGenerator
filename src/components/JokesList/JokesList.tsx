import { useSelector } from "react-redux";
import styles from "./jokeList.module.css";
import JokesListItem from "./JokesListItem";
import type { RootState } from "../../redux/store";
import { useState } from "react";
import Pagination from "../pagination/Pagination";
import { paginate } from "../../utils/paginate";

const PAGE_SIZE = 5;

export default function JokesList() {
  const jokes = useSelector((state: RootState) => state.jokes);
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
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
