import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Name.module.css";

// 👇 Format the pokemon's id to #000.
function formatIntWithHash(num) {
  const formattedNum = num.toString().padStart(3, "0");
  return `#${formattedNum}`;
}

export default function Name({ pokemonName }) {
  Name.propTypes = {
    pokemonName: PropTypes.string.isRequired,
  };

  const [state, setState] = useState({
    name: "",
    pokedexId: "",
    types: [],
  });

  useEffect(() => {
    if (pokemonName === "") {
      return;
    }
    async function fetchData() {
      const response = await fetch(
        `https://tyradex.tech/api/v1/pokemon/${pokemonName}`
      );

      const data = await response.json();
      const { name, pokedexId, types } = data;
      setState({ name: name.fr, pokedexId, types });
    }
    fetchData();
  }, [pokemonName]);
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__pokemon}>
        <h1 className={styles["wrapper__pokemon--name"]}>{state.name}</h1>
        <p className={styles["wrapper__pokemon--id"]}>
          {formatIntWithHash(state.pokedexId)}
        </p>
      </div>
      <div className={styles.wrapper__type}>
        {state.types.map((el) => (
          <div key={el.name} className={styles["wrapper__type--value"]}>
            {el.name}
          </div>
        ))}
      </div>
    </section>
  );
}
