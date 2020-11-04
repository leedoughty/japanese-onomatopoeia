import { Link } from "react-router-dom";
import "./App.css";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h1>Japanese Onomatopoeia</h1>
      </Link>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
