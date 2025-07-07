import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./nav.module.css";

export default function Navbar() {
  return (
    <nav className={styles["nav-bar"]}>
      <Header />
      <div className={styles["links"]}>
        <NavLink className="nav-bar-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-bar-item" to="/favJokes">
          Favourite Jokes
        </NavLink>
      </div>
    </nav>
  );
}
