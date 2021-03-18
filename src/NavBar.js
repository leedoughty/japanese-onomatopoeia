import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar({ ...props }) {
  const NavLink = styled.h1`
    color: ${props.navBarColour};
    font-size: 20px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <nav>
      <Link aria-label="home" className="nav-link" to="/">
        <NavLink>onomato</NavLink>
      </Link>
      <Link aria-label="about" className="nav-link" to="/about">
        <NavLink>about</NavLink>
      </Link>
    </nav>
  );
}

export default NavBar;
