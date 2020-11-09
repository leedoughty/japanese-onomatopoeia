import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link aria-label="home" className="nav-link" to="/">
        <h1 className="nav-item">onomato</h1>
      </Link>
      <Link aria-label="about" className="nav-link" to="/about">
        <h1 className="nav-item">about</h1>
      </Link>
    </nav>
  );
}

export default NavBar;
