import Pokemonfiltrecard from "./Pokemonfiltrecard";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

function Pokemonfiltre() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Pokemonfiltrecard />
    </div>
  );
}

export default Pokemonfiltre;
