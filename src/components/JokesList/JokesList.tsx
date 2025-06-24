import { useSelector } from "react-redux";
import JokesListItem from "./JokesListItem";
import type { RootState } from "../../redux/store"

export default function JokesList() {
  const jokes = useSelector((state:RootState) => state.jokes);
  console.log(jokes);

  return (
    <>
      <ol className="jokes-list">
        {jokes.map((joke) => (
          <JokesListItem key={joke.id} joke={joke} />
        ))}
      </ol>
    </>
  );
}
