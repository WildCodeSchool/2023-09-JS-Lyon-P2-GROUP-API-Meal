import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Divers.module.css";

export default function Divers({ pokemonName }) {
  Divers.propTypes = {
    pokemonName: PropTypes.string.isRequired,
  };

  const [state, setState] = useState({
    height: "",
    weight: "",
    sexe: "",
    egg_groups: [],
  });
  useEffect(() => {
    fetch(`https://tyradex.tech/api/v1/pokemon/${pokemonName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const { height, weight, sexe, egg_groups: eggGroups } = data; // 👈 How to resolve this ?
        setState({ height, weight, sexe, egg_groups: eggGroups }); // 👈 Crash if egg_groups empty
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pokemonName]);

  return (
    <section className={styles.wrapper}>
      <article className={styles.wrapper__header}>
        <div className={styles["wrapper__header--data"]}>
          <h4 className="test">Height</h4>
          <p>{state.height}</p>
        </div>
        <div className={styles["wrapper__header--data"]}>
          <h4>Weight</h4>
          <p>{state.weight}</p>
        </div>
      </article>
      <table className={styles.wrapper__body}>
        <thead className={styles["wrapper__body--table"]}>
          <tr className={styles["wrapper__body--tr"]}>
            <th colSpan="3">Élevage</th>
          </tr>
        </thead>
        <tbody className={styles["wrapper__body--table"]}>
          <tr className={styles["wrapper__body--tr"]}>
            <td className={styles["wrapper__body--subtitle"]}>Genre</td>
            {state.sexe !== null ? (
              <>
                <td id="male">{state.sexe.male}%</td>
                <td id="female">{state.sexe.female}%</td>
              </>
            ) : (
              <td>unknown...</td>
            )}
          </tr>
          <tr className={styles["wrapper__body--tr"]}>
            <td id="egg_logo" className={styles["wrapper__body--subtitle"]}>
              Oeuf
            </td>
            {state.egg_groups !== null ? (
              state.egg_groups.map((el) => (
                <td key={el} className="egg">
                  {el}
                </td>
              ))
            ) : (
              <td>unknown...</td>
            )}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
