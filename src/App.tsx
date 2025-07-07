import { useDispatch } from "react-redux";
import JokesList from "./components/JokesList/JokesList";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect } from "react";
import { loadFavoritesFromLocalStorage } from "./utils/storageUtils";
import { setFavJokes } from "./redux/favJokesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedJokes = loadFavoritesFromLocalStorage();
    dispatch(setFavJokes(storedJokes));
  }, [dispatch]);

  return (
    <div className="content">
      <Sidebar />
      <JokesList />
    </div>
  );
}

export default App;
