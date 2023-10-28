import styles from "./Evolution.module.css";

const evolution = [
  {
    id: "7",
    img: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/7/regular.png",
  },
  {
    id: "8",
    img: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/9/regular.png",
  },
  {
    id: "9",
    img: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/8/regular.png",
  },
];

// 👇 Format the pokemon's id to #000.
function formatIntWithHash(num) {
  const formattedNum = num.toString().padStart(3, "0");
  return `#${formattedNum}`;
}

export default function Evolution() {
  return (
    <div className={styles.wrapper}>
      <div id="first" className={styles.wrapper__icon}>
        <img
          className={styles["wrapper__icon--img"]}
          src={evolution[0].img}
          alt=""
        />
        <p className={styles["wrapper__icon--id"]}>
          {formatIntWithHash(evolution[0].id)}
        </p>
      </div>
      <div id="third" className={styles.wrapper__icon}>
        <img
          className={styles["wrapper__icon--img"]}
          src={evolution[1].img}
          alt=""
        />
        <p className={styles["wrapper__icon--id"]}>
          {formatIntWithHash(evolution[1].id)}
        </p>
      </div>
      <div id="second" className={styles.wrapper__icon}>
        <img
          className={styles["wrapper__icon--img"]}
          src={evolution[2].img}
          alt=""
        />
        <p className={styles["wrapper__icon--id"]}>
          {formatIntWithHash(evolution[2].id)}
        </p>
      </div>
    </div>
  );
}
