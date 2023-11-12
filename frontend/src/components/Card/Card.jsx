import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Name from "./Name/Name";
import Hero from "./Hero/Hero";
import StatNavbar from "./StatsNavbar/StatNavbar";
import styles from "./Card.module.css";
import colors from "./colors";

export default function Card() {
  const { pokemonName } = useParams();

  const [isClicked, setIsClicked] = useState(false);
  const [currentType, setCurrentType] = useState([]);

  useEffect(() => {
    async function fetchType() {
      const response = await fetch(
        `https://tyradex.vercel.app/api/v1/pokemon/${pokemonName}`
      );
      const { types } = await response.json();
      setCurrentType(types[0].name);
    }
    fetchType();
  }, [pokemonName]);

  function getColor(param) {
    const currentColor = colors.find((el) => {
      return el.type === param;
    });
    return currentColor?.color; // CHECK IF DATA IS PRESENT BEFORE RENDERING
  }

  return (
    <main
      className={styles.container}
      style={{ backgroundColor: getColor(currentType) }}
    >
      <Navbar pokemonName={pokemonName} />
      <Name pokemonName={pokemonName} />
      <Hero
        pokemonName={pokemonName}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
      />
      <StatNavbar
        pokemonName={pokemonName}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
      />
    </main>
  );
}
