import JokesForm from "../Form/JokesForm";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <JokesForm />
    </div>
  );
}
