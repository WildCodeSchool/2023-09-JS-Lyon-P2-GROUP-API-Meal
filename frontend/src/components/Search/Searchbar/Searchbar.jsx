import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ setResults }) {
  // 👇 "setResults" must be a function
  Searchbar.propTypes = {
    setResults: PropTypes.func.isRequired,
  };
  const [input, setInput] = useState("");
  // 👇 Make the research more user-friendly (case & accent ain't needed).
  const removeAccents = (str) => {
    return str
      .normalize("NFD") // 👈 returns Unicode Normalization Form.
      .replace(/[\u0300-\u036f]/g, "") // 👈 remove accents.
      .toLowerCase(); // 👈 lowercase.
  };

  const fetchData = async (value) => {
    const searchTerm = removeAccents(value);
    const res = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
    const data = await res.json();
    const results = data
      .filter(
        (pokemon) => removeAccents(pokemon.name.fr).startsWith(searchTerm) // 👈 search input value in api's array (from left to right).
      )
      .sort(
        (a, b) =>
          removeAccents(a.name.fr).localeCompare(removeAccents(b.name.fr)) // 👈 Sort api's array output by alphabetical order.
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
