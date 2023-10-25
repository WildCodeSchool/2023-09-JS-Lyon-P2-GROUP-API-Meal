import React from "react";

function Home() {
  return (
    <div className="home-page">
      <div id="div-image">
        <img
          id="homeImage"
          src="src/assets/homepicture.png"
          alt="pokemon click me "
        />

        <p id="homeParagraph">
          It’s empty ! <br />
          Catch’em Now !
        </p>
      </div>
    </div>
  );
}

export default Home;
