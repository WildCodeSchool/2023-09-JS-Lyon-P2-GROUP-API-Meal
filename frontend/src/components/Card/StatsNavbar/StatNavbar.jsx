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
        `https://tyradex.tech/api/v1/pokemon/${pokemonName}`
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
      <button
        id={1}
        type="button"
        aria-label="button"
        onClick={handleTabClick}
        className={styles.arrow}
        style={isClicked === false ? { display: "none" } : null}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
        </svg>
      </button>

      <nav className={styles.navbar}>
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className={styles.navbar__btn}
            style={
              currentTab === `${tab.id}` && isClicked === false
                ? { opacity: 1 }
                : null
            }
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
