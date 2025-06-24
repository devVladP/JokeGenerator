import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <NavLink className="nav-bar-item" to="/">
        Home
      </NavLink>
      <NavLink className="nav-bar-item" to="/jokes">
        Jokes
      </NavLink>
      <NavLink className="nav-bar-item" to="/favJokes">
        Favourite Jokes
      </NavLink>
    </nav>
  );
}