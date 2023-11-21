import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const normalText = (sansAccent) => {
  return sansAccent
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

function PokemonFiltreCards() {
  const [pokemonType, setPokemonType] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState(null);
  const [filtrePokemonEvent, setFiltrePokemonEvent] = useState(null);

  useEffect(() => {
    async function getType() {
      const data = await fetch("https://tyradex.tech/api/v1/pokemon");
      const res = await data.json();
      setPokemonType(res);
    }
    getType();
  }, []);

  useEffect(() => {
    // la recupération des données depuis un composant //

    const filtrePokemonTypes = new URLSearchParams(window.location.search).get(
      "filtrePokemonTypes"
    );
    setFiltrePokemonEvent(filtrePokemonTypes);

    //  filtre les pokemons //

    if (pokemonType !== null && filtrePokemonEvent) {
      const filtered = pokemonType.filter((item) => {
        return (
          item.types &&
          item.types.some((typename) => {
            return typename !== null && typename.name === filtrePokemonTypes;
          })
        );
      });
      setFilteredPokemon(filtered);
    }
  }, [pokemonType]);

  return (
    <div className="display-pokemon">
      {filteredPokemon !== null
        ? filteredPokemon.map((pokemon) => (
            <Link
              to={`/Card/${normalText(pokemon.name.fr)}`}
              key={pokemon.pokedexId}
              className="pokeTypeCard"
              style={{
                backgroundColor: `var(--${normalText(
                  filtrePokemonEvent
                )}-color)`,
              }}
            >
              <img
                className="pokeType"
                src={pokemon.sprites.regular}
                alt={pokemon.name}
              />
              <p className="pokemon-name">{pokemon.name.fr}</p>
            </Link>
          ))
        : null}
    </div>
  );
}

export default PokemonFiltreCards;
