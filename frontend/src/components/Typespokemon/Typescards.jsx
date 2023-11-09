import React from "react";

const iconsTypes = [
  { image: "src/assets/bug.svg", name: "Insecte" },
  { image: "src/assets/dark.svg", name: "Ténèbres" },
  { image: "src/assets/dragon.svg", name: "Dragon" },
  { image: "src/assets/electric.svg", name: "Électrik" },
  { image: "src/assets/fairy.svg", name: "Fée" },
  { image: "src/assets/fighting.svg", name: "Combat" },
  { image: "src/assets/fire.svg", name: "Feu" },
  { image: "src/assets/flying.svg", name: "Vol" },
  { image: "src/assets/ghost.svg", name: "Spectre" },
  { image: "src/assets/grass.svg", name: "Plante" },
  { image: "src/assets/ground.svg", name: "Sol" },
  { image: "src/assets/ice.svg", name: "Glace" },
  { image: "src/assets/normal.svg", name: "Normal" },
  { image: "src/assets/poison.svg", name: "Poison" },
  { image: "src/assets/psychic.svg", name: "Psy" },
  { image: "src/assets/rock.svg", name: "Roche" },
  { image: "src/assets/water.svg", name: "Eau" },
  { image: "src/assets/steel.svg", name: "Acier" },
];

function Typescards() {
  const filtrePokemonTypes = (pokemonGenre) => {
    window.location.href = `/Pokemonfiltre?filtrePokemonTypes=${pokemonGenre}`;
  };
  return (
    <div className="display-pokemon">
      {iconsTypes.map((iconType) => (
        <button
          value={iconType.name}
          type="button"
          className="pokeCard"
          key={iconType.name}
          data-pokemontype={iconType.name}
          onClick={(e) => filtrePokemonTypes(e.target.value)}
          style={{
            backgroundColor: `var(--${iconType.name.toLowerCase()}-color)`,
          }}
        >
          <img className="poke" src={iconType.image} alt={iconType.name} />
          <p>{iconType.name}</p>
        </button>
      ))}
    </div>
  );
}

export default Typescards;
