import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ setResults }) {
  // 👇 "setResults" must be a function
  Searchbar.propTypes = {
    setResults: PropTypes.func.isRequired,
  };
  const [input, setInput] = useState("");
  // 👇 accent isn't mandatory in the search bar (ex => Salameche works for Salamèche)
  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const fetchData = async (value) => {
    const res = await fetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon");
    const searchTerm = removeAccents(value);

    const data = await res.json();
    const results = data
      .filter(
        (pokemon) => removeAccents(pokemon.name.fr).startsWith(searchTerm) // 👈 see removeAccents && search from the pokemon's name start.
      )
      .sort(
        (a, b) =>
          removeAccents(a.name.fr).localeCompare(removeAccents(b.name.fr)) // 👈 see removeAccents && sort by alphabetical order
      );

    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <form className={styles.form} action="">
      <input
        className={styles.form__input}
        type="text"
        placeholder="Gotta Catch'em All..."
        value={input}
        onChange={(el) => handleChange(el.target.value)}
      />
    </form>
  );
}

export default Searchbar;
