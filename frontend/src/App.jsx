import { useState } from "react";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Search setPokemon={setPokemon} pokemon={pokemon} />
    </div>
  );
}

export default App;
