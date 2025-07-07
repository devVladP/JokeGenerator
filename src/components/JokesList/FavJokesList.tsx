import type { Joke } from "../../types/Joke";
import JokesListItem from "./JokesListItem";
import styles from "./jokeList.module.css";

interface FavJokesListProps {
  jokes: Joke[];
}

export default function FavJokesList({ jokes }: FavJokesListProps) {
  // const jokes = getAllLocalStorage();

  // function getAllLocalStorage(): [id: string, value: Joke][] {
  //   const result: [id: string, value: Joke][] = [];

  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     if (key && key.startsWith("joke:")) {
  //       const rawValue = localStorage.getItem(key);
  //       const value = JSON.parse(rawValue as string) as Joke;
  //       if (value) result.push([key, value]);
  //     }
  //   }

  //   return result;
  // }

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
