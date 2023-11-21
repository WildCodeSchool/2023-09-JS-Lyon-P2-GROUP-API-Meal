import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Evolution.module.css";

export default function Evolution({ evolution, pokemonName }) {
  Evolution.propTypes = {
    evolution: PropTypes.objectOf,
    pokemonName: PropTypes.string.isRequired,
  };
  Evolution.defaultProps = {
    evolution: undefined,
  };
  const [nextSprite, setNextSprite] = useState([]);
  const [preSprite, setPreSprite] = useState([]);

  // 👇 Make the research more user-friendly (case & accent ain't needed).
  const removeAccents = (str) => {
    return str
      .normalize("NFD") // 👈 returns Unicode Normalization Form.
      .replace(/[\u0300-\u036f]/g, "") // 👈 remove accents.
      .toLowerCase(); // 👈 lowercase.
  };

  // 👇 Format the pokemon's id to #000.
  function formatIntWithHash(num) {
    const formattedNum = num.toString().padStart(3, "0");
    return `#${formattedNum}`;
  }

  async function getSprites(name) {
    const response = await fetch(
      `https://tyradex.tech/api/v1/pokemon/${removeAccents(name)}`
    );
    const { sprites } = await response.json();
    return sprites.regular;
  }

  useEffect(() => {
    if (evolution === null || evolution.next === null) {
      return;
    }
    const newArray = evolution.next;
    async function getSrc() {
      const updatedSprites = await Promise.all(
        evolution.next.map(async (el) => {
          const sprite = await getSprites(el.name);
          return sprite;
        })
      );
      newArray.forEach((el, id) => {
        const picture = el;
        picture.img = updatedSprites[id];
      });
      setNextSprite(newArray);
    }
    getSrc();
  }, [pokemonName]);

  useEffect(() => {
    if (evolution === null || evolution.pre === null) {
      return;
    }
    const newArray = evolution.pre;
    async function getSrc() {
      const updatedSprites = await Promise.all(
        evolution.pre.map(async (el) => {
          const sprite = await getSprites(el.name);
          return sprite;
        })
      );
      newArray.forEach((el, id) => {
        const picture = el;
        picture.img = updatedSprites[id];
      });
      setPreSprite(newArray);
    }
    getSrc();
  }, [pokemonName]);

  return (
    <div className={styles.wrapper}>
      {evolution.next === null && evolution.pre === null && (
        <h3>Ce pokemon n'a pas d'évolution !</h3>
      )}
      {preSprite.map((el) => {
        return (
          <div key={el.pokedexId} className={styles.wrapper__icon}>
            <Link to={`/Card/${removeAccents(el.name)}`}>
              <button
                type="button"
                onClick={getSprites(el.name)}
                className={styles.evolution__button}
              >
                <img
                  src={el.img}
                  alt="Pas d'évolution !"
                  className="wrapper__icon--img"
                  style={pokemonName === "evoli" ? { width: "80px" } : null}
                />
              </button>
            </Link>
            <p className={styles.wrapper__name}>{el.name}</p>
            <p className={styles.wrapper__name}>
              {formatIntWithHash(el.pokedexId)}
            </p>
          </div>
        );
      })}
      {nextSprite.map((el) => {
        return (
          <div key={el.pokedexId} className={styles.wrapper__icon}>
            <Link to={`/Card/${removeAccents(el.name)}`}>
              <button
                type="button"
                onClick={getSprites(el.name)}
                className={styles.evolution__button}
              >
                <img
                  src={el.img}
                  alt="Pas d'évolution !"
                  className="wrapper__icon--img"
                  style={pokemonName === "evoli" ? { width: "80px" } : null}
                />
              </button>
            </Link>
            <p className={styles.wrapper__name}>{el.name}</p>
            <p className={styles.wrapper__name}>
              {formatIntWithHash(el.pokedexId)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
