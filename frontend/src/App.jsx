import { useState } from "react";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Typespokemon from "./components/Typespokemon/Typespokemon";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <section className="navigation">
        <Navbar />
        <Search setPokemon={setPokemon} pokemon={pokemon} />
      </section>
      <section className="appBody">
        <Typespokemon />
      </section>
    </div>
  );
}

export default App;
