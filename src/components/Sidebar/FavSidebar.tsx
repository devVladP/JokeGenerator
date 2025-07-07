import FavJokesForm, { type FavJokesFormProps } from "../Form/FavJokesForm";
import styles from "./sidebar.module.css";

export default function FavSideBar({ onSearch }: FavJokesFormProps) {
  return (
    <div className={styles.sidebar}>
      <div className={styles["filter-logo-section"]}>
        <img
          className={styles["logo"]}
          src="https://static.thenounproject.com/png/4800805-200.png"
          alt="Filter"
        />
        <h2 className={styles["filters-title"]}>Filters</h2>
      </div>
      <FavJokesForm onSearch={onSearch} />
    </div>
  );
}
