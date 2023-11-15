import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Searchlist.module.css";

export default function Searchlist({ results }) {
  Searchlist.propTypes = {
    results: PropTypes.arrayOf.isRequired,
  };

  // 👇 Make the research more user-friendly (case & accent ain't needed).
  const removeAccents = (str) => {
    return str
      .normalize("NFD") // 👈 returns Unicode Normalization Form.
      .replace(/[\u0300-\u036f]/g, "") // 👈 remove accents.
      .toLowerCase(); // 👈 lowercase.
  };
  // 👇 Suggest 6 choices maximum
  const limitedResults = results.slice(0, 6);

  return (
    <div className={styles["results-list"]}>
      {limitedResults.map((result) => (
        <Link
          key={result.name.fr}
          to={`/Card/${removeAccents(result.name.fr)}`}
        >
          <button className={styles["results-list__result"]} type="button">
            {result.name.fr}
          </button>
        </Link>
      ))}
    </div>
  );
}
