import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";

export default function Hero({ pokemonName, setIsClicked, isClicked }) {
  Hero.propTypes = {
    pokemonName: PropTypes.string.isRequired,
    setIsClicked: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired,
  };

  const [heroPicture, setHeroPicture] = useState("");

  function handleClick() {
    setIsClicked(!isClicked);
  }

  useEffect(() => {
    async function fetchHero() {
      const response = await fetch(
        `https://tyradex.tech/api/v1/pokemon/${pokemonName}`
      );
      const { sprites } = await response.json();
      setHeroPicture(sprites);
    }
    fetchHero();
  }, [pokemonName]);

  return (
    <button
      className={styles.hero_button}
      type="button"
      onClick={handleClick}
      aria-label="button"
    >
      <img
        className={`${styles.heroPicture} ${isClicked && styles.isClicked}`}
        src={heroPicture.regular}
        alt=""
      />
    </button>
  );
}
