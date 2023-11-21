import React from "react";

const iconsTypes = [
  { image: "src/assets/bug.svg", name: "Insecte", noAccentName: "Insecte" },
  { image: "src/assets/dark.svg", name: "Ténèbres", noAccentName: "Tenebres" },
  { image: "src/assets/dragon.svg", name: "Dragon", noAccentName: "Dragon" },
  {
    image: "src/assets/electric.svg",
    name: "Électrik",
    noAccentName: "Electrik",
  },
  { image: "src/assets/fairy.svg", name: "Fée", noAccentName: "Fee" },
  { image: "src/assets/fighting.svg", name: "Combat", noAccentName: "Combat" },
  { image: "src/assets/fire.svg", name: "Feu", noAccentName: "Feu" },
  { image: "src/assets/flying.svg", name: "Vol", noAccentName: "Vol" },
  { image: "src/assets/ghost.svg", name: "Spectre", noAccentName: "Spectre" },
  { image: "src/assets/grass.svg", name: "Plante", noAccentName: "Plante" },
  { image: "src/assets/ground.svg", name: "Sol", noAccentName: "Sol" },
  { image: "src/assets/ice.svg", name: "Glace", noAccentName: "Glace" },
  { image: "src/assets/normal.svg", name: "Normal", noAccentName: "Normal" },
  { image: "src/assets/poison.svg", name: "Poison", noAccentName: "Poison" },
  { image: "src/assets/psychic.svg", name: "Psy", noAccentName: "Psy" },
  { image: "src/assets/rock.svg", name: "Roche", noAccentName: "Roche" },
  { image: "src/assets/water.svg", name: "Eau", noAccentName: "Eau" },
  { image: "src/assets/steel.svg", name: "Acier", noAccentName: "Acier" },
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
          onClick={(e) => filtrePokemonTypes(e.target.value)}
          style={{
            backgroundColor: `var(--${iconType.noAccentName.toLowerCase()}-color)`,
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
