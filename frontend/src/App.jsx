import { useState } from "react";
import Search from "./components/Search/Search";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return <Search setPokemon={setPokemon} pokemon={pokemon} />;
}

export default App;
