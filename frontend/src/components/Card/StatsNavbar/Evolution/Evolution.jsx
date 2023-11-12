import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Evolution.module.css";

export default function Evolution({ evolution, pokemonName }) {
  Evolution.propTypes = {
    evolution: PropTypes.objectOf.isRequired,
    pokemonName: PropTypes.string.isRequired,
  };
  const [currentSprite, setCurrentSprite] = useState([]);

  async function getSprites(name) {
    const response = await fetch(`https://tyradex.tech/api/v1/pokemon/${name}`);
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
        // Set the image for each element in newArray
      });
      setCurrentSprite(newArray);
    }
    getSrc();
  }, [pokemonName]);

  return (
    <div className={styles.wrapper}>
      {currentSprite.length !== 0 ? (
        currentSprite.map((el) => {
          return (
            <div key={el.pokedexId} className={styles.wrapper__icon}>
              <Link to={`/Card/${el.name}`}>
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
            </div>
          );
        })
      ) : (
        <h3>Il n'y a pas d'évolution !</h3>
      )}
    </div>
  );
}
