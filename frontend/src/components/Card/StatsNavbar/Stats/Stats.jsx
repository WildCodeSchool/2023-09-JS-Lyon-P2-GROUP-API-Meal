import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Stats.module.css";

export default function Stats({ pokemonName }) {
  Stats.propTypes = {
    pokemonName: PropTypes.string.isRequired,
  };

  const [state, setState] = useState({
    stats: [],
    values: [],
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokemonName}`
      );

      const data = await response.json();
      const stats = data;
      const keys = Object.keys(stats.stats);
      const values = Object.values(stats.stats);
      setState({ stats: keys, values });
    }

    fetchData();
  }, [pokemonName]);

  // 👇 Create an array of objects where each object contains one skill and its value.
  const skills = Object.entries(state.stats).map(([key, skill]) => ({
    skill,
    value: state.values[key],
  }));

  // 👇 Computes the loader-div lenght relative to the maximum value of 150 and the actual skill's value of the pokemon.
  function loaderLength(value) {
    return `${(value * 100) / 150}%`;
  }

  // 👇 Apply different color to the loader-div
  function skillBarColor(skill) {
    const specialSkills = ["hp", "def", "vit"];
    return specialSkills.includes(skill) ? "#D67873" : "#A7D88D";
  }

  return (
    <main className={styles.wrapper}>
      {skills.map((el) => (
        <div key={el.skill} className={styles.skill}>
          <h3 className={styles.skill__name}>{el.skill}</h3>
          <p className={styles.skill__value}>{el.value}</p>
          <div className={styles.skill__bar}>
            <div
              className={styles["skill__bar--loader"]}
              style={{
                width: loaderLength(el.value),
                backgroundColor: skillBarColor(el.skill),
              }}
            />
          </div>
        </div>
      ))}
    </main>
  );
}
