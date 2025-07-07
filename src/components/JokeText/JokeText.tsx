import type { Joke } from "../../types/Joke";
import "./JokeText.css";

interface JokeTextProps {
  joke: Joke;
}

export default function JokeText({ joke }: JokeTextProps) {
  return (
    <p className="joke-text" style={{ whiteSpace: "pre-line" }}>
      {joke.type === "twopart"
        ? `- ${joke.setup}\n- ${joke.delivery}`
        : `- ${joke.joke}`}
    </p>
  );
}
