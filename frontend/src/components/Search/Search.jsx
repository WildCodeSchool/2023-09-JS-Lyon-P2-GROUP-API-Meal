import PropTypes from "prop-types";
import { useState } from "react";
import Searchlist from "./Searchlist/Searchlist";
import Searchbar from "./Searchbar/Searchbar";
import styles from "./Search.module.css";

export default function Search({ setPokemon }) {
  Search.defaultProps = {
    setPokemon: undefined,
  };
  // 👇 "setResults" must be a function
  Search.propTypes = {
    setPokemon: PropTypes.func,
  };

  const [results, setResults] = useState([]);

  return (
    <div className={styles.container}>
      <Searchbar setResults={setResults} />
      <Searchlist results={results} setPokemon={setPokemon} />
    </div>
  );
}
