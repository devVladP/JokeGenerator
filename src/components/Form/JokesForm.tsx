import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchAndStoreJokes } from "../../redux/thunks/jokeApiThunk";
import { MultipleSelect } from "../Select/MultipleSelect";
import AmountSection from "./AmountSection";
import type { AppDispatch } from "../../redux/store";
import type { SelectOption } from "../../types/SelectOptions";
import type { JokeQueryParams } from "../../api/jokeApi";
import styles from "./form.module.css";
import { SingleSelect } from "../Select/SingleSelect";

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

const languageOptions = [
  { value: "cs", label: "Czech" },
  { value: "en", label: "English" },
  { value: "de", label: "German" },
];

export default function JokesForm() {
  const [selectedCategories, setSelectedCategories] = useState<SelectOption[]>(
    []
  );
  const [selectedFlags, setSelectedFlags] = useState<SelectOption[]>([]);
  const [selectedLang, setSelectedLang] = useState<SelectOption>();
  const [amountValue, setAmount] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  function searchJoke(formData: FormData) {
    const categories = selectedCategories.map((prev) => prev.value).join(",");
    const blacklistFlags = selectedFlags.map((prev) => prev.value).join(",");
    const typeData = formData.getAll("type");

    const typeValue =
      typeData.length === 1 ? typeData[0]?.toString() : undefined;
    const type =
      typeValue === "single" || typeValue === "twopart" ? typeValue : undefined;

    const params: JokeQueryParams = {
      category: categories,
      amount: amountValue,
      blacklistFlags: blacklistFlags,
      language: selectedLang?.value,
      search: searchValue,
      type: type,
    };

    dispatch(fetchAndStoreJokes({ params }));
  }

  return (
    <form action={searchJoke} className="jokes-form">
      <div className={styles["jokes-form-item"]}>
        <span>Categories</span>

        <MultipleSelect
          value={selectedCategories}
          options={categoryOptions}
          onChange={(o) => setSelectedCategories(o)}
        />
      </div>

      <div className={styles["jokes-form-item"]}>
        <span>Type</span>
        <div className={styles["radio-wrapper"]}>
          <label className={styles["custom-checkbox"]}>
            <input type="checkbox" name="type" value="single" />
            <span className={styles.checkmark}></span>
            Single
          </label>
          <label className={styles["custom-checkbox"]}>
            <input type="checkbox" name="type" value="twopart" />
            <span className={styles.checkmark}></span>
            Twopart
          </label>
        </div>
      </div>

      <div className={styles["jokes-form-item"]}>
        <span>Flags to blacklist</span>

        <MultipleSelect
          value={selectedFlags}
          options={flagOptions}
          onChange={(o) => setSelectedFlags(o)}
        />
      </div>

      <div className={styles["jokes-form-item"]}>
        <span>Language</span>
        <SingleSelect
          value={selectedLang}
          options={languageOptions}
          onChange={(o) => setSelectedLang(o)}
        />
      </div>

      <div className={styles["jokes-form-item"]}>
        <span>Search</span>
        <input
          type="text"
          className={styles.search}
          placeholder="e.g. C#, Programming"
          value={searchValue}
          onChange={(x) => setSearchValue(x.target.value)}
        />
      </div>

      <div className={styles["jokes-form-item"]}>
        <AmountSection currentValue={amountValue} increment={setAmount} />
      </div>

      <div className={styles["jokes-form-item"]}>
        <button className={styles["submit-button"]} type="submit">
          Find jokes
        </button>
      </div>
    </form>
  );
}
