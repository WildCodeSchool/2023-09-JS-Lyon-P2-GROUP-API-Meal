import PropTypes from "prop-types";
import { useState } from "react";
import Searchlist from "./Searchlist/Searchlist";
import Searchbar from "./Searchbar/Searchbar";

export default function Search({ setPokemon }) {
  // 👇 "setResults" must be a function
  Search.propTypes = {
    setPokemon: PropTypes.func.isRequired,
  };

  const [results, setResults] = useState([]);

  return (
    <>
      <Searchbar setResults={setResults} />
      <Searchlist results={results} setPokemon={setPokemon} />
    </>
  );
}
