import React from "react";
import Navbar from "../navBar/nav";

function Home() {
  return (
    <>
      <Navbar />
      <div id="div-image">
        <a href="/App">
          <img
            id="homeImage"
            src="src/assets/homepicture.png"
            alt="pokemon click me "
          />
        </a>
        <h2 id="homeParagraph">
          It’s empty ! <br />
          Catch’em Now !
        </h2>
      </div>
    </>
  );
}

export default Home;
