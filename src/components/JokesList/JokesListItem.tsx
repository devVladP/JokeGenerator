import type { Joke } from "../../types/Joke";
import FavButton from "../FavButton/FavButton";
import JokeText from "../JokeText/JokeText";
import Tags from "../Tags/Tags";
import styles from "./jokeList.module.css";

interface JokesListItemProps {
  joke: Joke;
}

export default function JokesListItem({ joke }: JokesListItemProps) {
  return (
    <li className="">
      <div className={styles["joke-wrapper"]}>
        <div>
          <JokeText joke={joke} />
          <Tags activeFlags={joke.activeFlags} />
        </div>
        <FavButton joke={joke} />
      </div>
    </li>
  );
}
