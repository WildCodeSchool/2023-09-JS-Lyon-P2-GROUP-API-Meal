import { useState } from "react";
import Search from "./components/Search/Search";
import Navbar from "./components/navBar/nav";
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
