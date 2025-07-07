import Logo from "./Logo";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <Logo />
      <h1 className={styles["logo-text"]}>Best Jokes</h1>
    </div>
  );
}
