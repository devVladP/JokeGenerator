import { useSelector } from "react-redux";
import styles from "./jokeList.module.css";
import JokesListItem from "./JokesListItem";
import type { RootState } from "../../redux/store";

export default function JokesList() {
  const jokes = useSelector((state: RootState) => state.jokes);
  console.log(jokes);

  return (
    <div className={styles.section}>
      <ol className={styles["jokes-list"]}>
        {jokes.map((joke) => (
          <JokesListItem key={joke.id} joke={joke} />
        ))}
      </ol>
    </div>
  );
}
