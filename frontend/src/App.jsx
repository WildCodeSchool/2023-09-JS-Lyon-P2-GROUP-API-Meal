import { useState } from "react";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Typespokemon from "./components/Typespokemon/Typespokemon";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Search setPokemon={setPokemon} pokemon={pokemon} />
      <Typespokemon />
    </div>
  );
}

export default App;
