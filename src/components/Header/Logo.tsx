import styles from "./header.module.css";

export default function Logo() {
  return (
    <img
      className={styles["logo-header"]}
      src="https://pngimg.com/d/smiley_PNG149.png"
      alt="logo"
    ></img>
  );
}
