import { useDispatch } from "react-redux";
import { makeFavourite, makeUnfavourite } from "../../redux/jokesSlice";
import HeartSvg from "../Hearts/HeartsSvg";
import "./FavButton.css";
import type { Joke } from "../../types/Joke";
import type { AppDispatch } from "../../redux/store";

interface FavButtonProps {
  joke: Joke;
}

export default function FavButton({ joke }: FavButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  function handleFavouriteToggle() {
    if (joke.isFavourite) {
      dispatch(makeUnfavourite(joke.id));
    } else {
      dispatch(makeFavourite(joke.id));
    }
  }

  return (
    <button className="heart-button" onClick={handleFavouriteToggle}>
      <HeartSvg filled={joke.isFavourite} />
    </button>
  );
}
