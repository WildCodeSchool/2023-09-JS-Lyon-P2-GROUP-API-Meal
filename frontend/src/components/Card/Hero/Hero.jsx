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
    console.info(isClicked);
  }

  useEffect(() => {
    async function fetchHero() {
      const response = await fetch(
        `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokemonName}`
      );
      const { sprites } = await response.json();
      setHeroPicture(sprites);
    }
    fetchHero();
  }, [pokemonName]);

  return (
    <button type="button" onClick={handleClick} onKeyDown={handleClick}>
      <img
        className={`${styles.heroPicture} ${isClicked && styles.isClicked}`}
        src={heroPicture.regular}
        alt=""
      />
    </button>
  );
}
