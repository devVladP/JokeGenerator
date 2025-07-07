import styles from "./form.module.css";
import { MultipleSelect } from "../Select/MultipleSelect";
import { useState } from "react";
import type { SelectOption } from "../../types/SelectOptions";
import type { FilterValues } from "../../hooks/useFilteredJokes";

interface FavJokesFormProps {
  onSearch: (filter: FilterValues) => void;
}

export default function FavJokesForm({ onSearch }: FavJokesFormProps) {
  const [selectedFlags, setSelectedFlags] = useState<SelectOption[]>([]);

  const flagOptions = [
    { value: "nsfw", label: "NSFW" },
    { value: "religious", label: "Religious" },
    { value: "political", label: "Political" },
    { value: "racist", label: "Racist" },
    { value: "sexist", label: "Sexist" },
    { value: "explicit", label: "Explicit" },
  ];

  function searchJoke(formData: FormData) {
    const typeData = formData.getAll("type");
    const typeValue = typeData.length < 1 ? undefined : typeData[0]?.toString();
    const type =
      typeValue === "single" || typeValue === "twopart" ? typeValue : undefined;

    onSearch({
      type,
      flags: selectedFlags.map((flag) => flag.value),
    });
  }

  return (
    <form action={searchJoke} className="jokes-form">
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
        <button className={styles["submit-button"]} type="submit">
          Find jokes
        </button>
      </div>
    </form>
  );
}
