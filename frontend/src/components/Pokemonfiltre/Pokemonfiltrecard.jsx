import { React, useEffect, useState } from "react";

const normalizeString = (sansAccent) => {
  return sansAccent
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};
function PokemonFiltreCards() {
  const [pokemonType, setPokemonType] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState(null);

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

    const urlParams = new URLSearchParams(window.location.search);
    const filtrePokemonTypes = urlParams.get("filtrePokemonTypes");

    //  filtre les pokemons //

    if (pokemonType !== null && filtrePokemonTypes) {
      const filtered = pokemonType.filter((item) => {
        return item.types !== null && item.types[0].name === filtrePokemonTypes;
      });
      setFilteredPokemon(filtered);
    }
  }, [pokemonType]);

  return (
    <div className="display-pokemon">
      {filteredPokemon !== null
        ? filteredPokemon.map((pokemon) => (
            <div
              className="pokeTypeCard"
              key={pokemon.pokedexId}
              style={{
                backgroundColor: `var(--${normalizeString(
                  pokemon.types[0].name
                )}-color)`,
              }}
            >
              <img
                className="pokeType"
                src={pokemon.sprites.regular}
                alt={pokemon.name}
              />
              <p>{pokemon.name.fr}</p>
            </div>
          ))
        : null}
    </div>
  );
}

export default PokemonFiltreCards;
