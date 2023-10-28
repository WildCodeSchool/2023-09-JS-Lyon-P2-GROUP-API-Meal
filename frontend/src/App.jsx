import { useState } from "react";
import Search from "./components/Search/Search";
import Nav from "./components/Navbar/nav";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <Nav />
      <Search setPokemon={setPokemon} pokemon={pokemon} />
    </div>
  );
}

export default App;
