import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function normalizePokemonName(noAccent) {
  return noAccent
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function Favoris() {
  const [getFavoris, setGetFavoris] = useState();
  const [afficheFavoris, setAfficheFavoris] = useState([]);

  useEffect(() => {
    async function myFavorite() {
      const data = await fetch("https://tyradex.tech/api/v1/pokemon");
      const res = await data.json();
      setGetFavoris(res);
    }
    myFavorite();
  }, []);

  // fetch le data depuis local storage
  useEffect(() => {
    const getFrom = JSON.parse(localStorage.getItem("favoris"));

    if (getFavoris && getFavoris !== null) {
      const matchingPokemons = getFavoris
        .filter((getFav) => getFav.pokedexId !== null)
        .filter((pokemon) =>
          getFrom.includes(normalizePokemonName(pokemon.name.fr))
        );

      matchingPokemons.forEach((pokemon) => {
        return pokemon;
      });
      setAfficheFavoris(matchingPokemons);
    }
  }, [getFavoris]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className="favoris-title">Bienvenue dans ton pokedex</h1>
        <p>Tu trouveras ici tous tes pokemons favoris</p>
      </div>

      <div className="display-pokemon">
        {afficheFavoris.map((favoris) => {
          const bgColor = normalizePokemonName(favoris.types[0].name);

          return (
            <Link
              to={`/Card/${normalizePokemonName(favoris.name.fr)}`}
              key={favoris.pokedexId}
              className="pokeFavoris"
              style={{
                backgroundColor: `var(--${bgColor}-color, #ffffff)`,
              }}
            >
              <img
                className="pokemonImage"
                src={favoris.sprites.regular}
                alt={favoris.name.fr}
              />
              <p className="pokemon-name">{favoris.name.fr}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Favoris;
