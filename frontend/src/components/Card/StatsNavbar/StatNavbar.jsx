import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Stats from "./Stats/Stats";
import Evolution from "./Evolution/Evolution";
import Divers from "./Divers/Divers";

import styles from "./StatNavbar.module.css";

function StatNavbar({ pokemonName, setIsClicked, isClicked }) {
  StatNavbar.propTypes = {
    pokemonName: PropTypes.string.isRequired,
    setIsClicked: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired,
  };

  const [state, setState] = useState({ evolution: {} });
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokemonName}`
      );

      const data = await response.json();
      const { evolution } = data;
      setState({ evolution });
    }

    fetchData();
  }, [pokemonName]);

  const [currentTab, setCurrentTab] = useState("1"); // 👈 Display tab
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
    setIsClicked(false);
  };

  const tabs = [
    {
      id: 1,
      tabTitle: "Stats",
      content: <Stats pokemonName={pokemonName} />,
    },
    {
      id: 2,
      tabTitle: "Evolution",
      content: (
        <Evolution evolution={state.evolution} pokemonName={pokemonName} />
      ),
    },
    {
      id: 3,
      tabTitle: "Divers",
      content: <Divers pokemonName={pokemonName} />,
    },
  ];

  return (
    <section className={`${styles.container} ${isClicked && styles.isClicked}`}>
      <nav className={styles.navbar}>
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className={styles.navbar__btn}
          >
            {tab.tabTitle}
          </button>
        ))}
      </nav>
      {tabs.map((tab) => (
        <div key={tab.id}>
          {currentTab === `${tab.id}` && <div>{tab.content}</div>}
        </div>
      ))}
    </section>
  );
}

export default StatNavbar;
