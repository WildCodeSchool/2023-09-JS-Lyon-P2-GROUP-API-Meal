import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/App">
        <div id="nav-pokedex">Pokedex</div>
      </Link>
      <div id="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
    </nav>
  );
}

export default Nav;
