import type { Joke } from "../../types/Joke";
import JokesListItem from "./JokesListItem";

export default function FavJokesList() {
  const jokes = getAllLocalStorage();

  function getAllLocalStorage(): [id: string, value: Joke][] {
    const result: [id: string, value: Joke][] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("joke:")) {
        const rawValue = localStorage.getItem(key);
        const value = JSON.parse(rawValue as string) as Joke;
        if (value) result.push([key, value]);
      }
    }

    return result;
  }

  return (
    <>
      <ol className="favJokesList">
        {jokes.map((joke) => (
          <JokesListItem key={joke[0]} joke={joke[1]} />
        ))}
      </ol>
    </>
  );
}
