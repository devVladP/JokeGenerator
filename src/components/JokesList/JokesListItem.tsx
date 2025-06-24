import type { Joke } from "../../types/Joke";
import FavButton from "../FavButton/FavButton";
import JokeText from "../JokeText/JokeText";
import Tags from "../Tags/Tags";

interface JokesListItemProps{
    joke: Joke
}

export default function JokesListItem({ joke } : JokesListItemProps) {
  return (
    <li className="">
      <div className="joke-wrapper">
        <JokeText joke={joke} />
        <FavButton joke={joke} />
      </div>
      <Tags activeFlags={joke.activeFlags} />
    </li>
  );
}
