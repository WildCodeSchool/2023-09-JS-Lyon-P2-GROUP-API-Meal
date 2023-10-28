import PropTypes from "prop-types";
import { useState } from "react";
import Stats from "./Stats/Stats";
import Evolution from "./Evolution/Evolution";
import Divers from "./Divers/Divers";

import styles from "./StatNavbar.module.css";

function StatNavbar({ pokemonName }) {
  StatNavbar.propTypes = {
    pokemonName: PropTypes.string.isRequired,
  };
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Stats",
      content: <Stats pokemonName={pokemonName} />,
    },
    {
      id: 2,
      tabTitle: "Evolution",
      content: <Evolution pokemonName={pokemonName} />,
    },
    {
      id: 3,
      tabTitle: "Divers",
      content: <Divers pokemonName={pokemonName} />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <section className={styles.container}>
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

<button className={styles.navbar__btn} type="button">
  Stats
</button>;
