import { useState } from "react";
import Search from "./components/Search/Search";
import HomePage from "./components/homePage/homepage";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <Search setPokemon={setPokemon} pokemon={pokemon} />
      <HomePage />
    </div>
  );
}

export default App;
