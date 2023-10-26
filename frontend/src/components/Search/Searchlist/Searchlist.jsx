import PropTypes from "prop-types";
import styles from "./Searchlist.module.css";

export default function Searchlist({ results, setPokemon }) {
  // 👇 "results" must be an array
  // 👇 "setPokemon" must be a function
  Searchlist.propTypes = {
    results: PropTypes.arrayOf.isRequired,
    setPokemon: PropTypes.func.isRequired,
  };
  // 👇 Suggest 6 choices maximum
  const limitedResults = results.slice(0, 6);
  // 👇 Needs to close on click
  const handleResult = (value) => {
    setPokemon(value);
  };

  return (
    <div className={styles["results-list"]}>
      {limitedResults.map((result) => (
        <button
          key={result.name.fr}
          className={styles["results-list__result"]}
          onClick={() => handleResult(result.name.fr)}
          type="button"
        >
          {result.name.fr}
        </button>
      ))}
    </div>
  );
}

// onClick={handleResult(result.name.fr)}
