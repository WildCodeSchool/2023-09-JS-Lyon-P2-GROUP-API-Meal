import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.primaryNavBar}>
      <Link to="/">
        <h1>Pokedex</h1>
      </Link>
      <div className={styles.burgerLogo}>
        <Link to="/App">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
