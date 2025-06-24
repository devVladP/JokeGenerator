import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchAndStoreJokes } from "../../redux/thunks/jokeApiThunk";
import { MultipleSelect } from "../Select/MultipleSelect";
import AmountSection from "./AmountSection";
import type { AppDispatch } from "../../redux/store";
import type { SelectOption } from "../../types/SelectOptions";
import type { JokeQueryParams } from "../../api/jokeApi";
import styles from "./form.module.css";

const categoryOptions = [
  { value: "Programming", label: "Programming" },
  { value: "Misc", label: "Misc" },
  { value: "Dark", label: "Dark" },
  { value: "Pun", label: "Pun" },
  { value: "Spooky", label: "Spooky" },
  { value: "Christmas", label: "Christmas" },
];

const flagOptions = [
  { value: "nsfw", label: "NSFW" },
  { value: "religious", label: "Religious" },
  { value: "political", label: "Political" },
  { value: "racist", label: "Racist" },
  { value: "sexist", label: "Sexist" },
  { value: "explicit", label: "Explicit" },
];

export default function JokesForm() {
  const [selectedCategories, setSelectedCategories] = useState<SelectOption[]>(
    []
  );
  const [selectedFlags, setSelectedFlags] = useState<SelectOption[]>([]);
  const [amountValue, setAmount] = useState<number>(1);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  function searchJoke() {
    const categories = selectedCategories.map((prev) => prev.value).join(",");
    const blacklistFlags = selectedFlags.map((prev) => prev.value).join(",");

    const params: JokeQueryParams = {
      category: categories,
      amount: amountValue,
      blacklistFlags: blacklistFlags,
    };

    dispatch(fetchAndStoreJokes({ params, navigate }));
  }

  return (
    <form action={searchJoke} className="jokes-form">
      <label>Category</label>

      <MultipleSelect
        value={selectedCategories}
        options={categoryOptions}
        onChange={(o) => setSelectedCategories(o)}
      />

      <label>Flags to blacklist</label>
      <MultipleSelect
        value={selectedFlags}
        options={flagOptions}
        onChange={(o) => setSelectedFlags(o)}
      />

      <AmountSection currentValue={amountValue} increment={setAmount} />

      <button className={styles["submit-button"]} type="submit">
        Find jokes
      </button>
    </form>
  );
}
