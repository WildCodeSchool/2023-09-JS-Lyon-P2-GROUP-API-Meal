import React from "react";

function Typescards() {
  const icons = [
    { image: "src/assets/bug.svg", name: "Bug" },
    { image: "src/assets/dark.svg", name: "Dark" },
    { image: "src/assets/dragon.svg", name: "Dragon" },
    { image: "src/assets/electric.svg", name: "Electric" },
    { image: "src/assets/fairy.svg", name: "Fairy" },
    { image: "src/assets/fighting.svg", name: "Fighting" },
    { image: "src/assets/fire.svg", name: "Fire" },
    { image: "src/assets/flying.svg", name: "Flying" },
    { image: "src/assets/ghost.svg", name: "Ghost" },
    { image: "src/assets/grass.svg", name: "Grass" },
    { image: "src/assets/ground.svg", name: "Ground" },
    { image: "src/assets/ice.svg", name: "Ice" },
    { image: "src/assets/normal.svg", name: "Normal" },
    { image: "src/assets/poison.svg", name: "Poison" },
    { image: "src/assets/psychic.svg", name: "Psychic" },
    { image: "src/assets/rock.svg", name: "Rock" },
    { image: "src/assets/water.svg", name: "Water" },
    { image: "src/assets/steel.svg", name: "Steal" },
  ];

  return (
    <div className="display-pokemon">
      {icons.map((pokemon) => (
        <div
          className="pokeCard"
          style={{
            backgroundColor: `var(--${pokemon.name.toLowerCase()}-color)`,
          }}
        >
          <a href="Typepokemon">
            <img className="poke" src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Typescards;
