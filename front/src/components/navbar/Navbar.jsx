import navStyles from "./Navbar.module.css";
import DarkModeToggle from "../darkMode/DarkModeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={navStyles.Navbar}>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projets</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
