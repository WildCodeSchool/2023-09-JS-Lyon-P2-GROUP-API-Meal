import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Navbar/nav";
import Name from "./Name/Name";
import StatNavbar from "./StatsNavbar/StatNavbar";
import styles from "./Card.module.css";

export default function Card() {
  const { pokemonName } = useParams();
  console.info(pokemonName);
  return (
    <main className={styles.container}>
      <Nav pokemonName={pokemonName} />
      <Name pokemonName={pokemonName} />
      <StatNavbar pokemonName={pokemonName} />
    </main>
  );
}
