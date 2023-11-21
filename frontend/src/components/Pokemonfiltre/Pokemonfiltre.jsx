import Pokemonfiltrecard from "./Pokemonfiltrecard";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

function Pokemonfiltre() {
  return (
    <>
      <section className="navigation">
        <Navbar />
        <Search />
      </section>
      <section className="appBody">
        <Pokemonfiltrecard />
      </section>
    </>
  );
}

export default Pokemonfiltre;
