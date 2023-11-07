import PropTypes from "prop-types";
import styles from "./Evolution.module.css";

// 👇 Format the pokemon's id to #000.
function formatIntWithHash(num) {
  const formattedNum = num.toString().padStart(3, "0");
  return `#${formattedNum}`;
}

export default function Evolution({ evolution }) {
  Evolution.propTypes = {
    evolution: PropTypes.string.isRequired,
  };
  console.info(evolution);
  return (
    <div className={styles.wrapper}>
      {evolution.next.map((el) => {
        return (
          <div key={el.pokedexId} className={styles.wrapper__icon}>
            <img src="" alt="" className="wrapper__icon--img" />
            <p className={styles["wrapper__icon--id"]}>
              {formatIntWithHash(el.pokedexId)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
