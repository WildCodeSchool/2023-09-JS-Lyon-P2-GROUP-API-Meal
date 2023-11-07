import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div id="div-image">
        <Link to="/App">
          <img
            id="homeImage"
            src="src/assets/homepicture.png"
            alt="pokemon click me "
          />
        </Link>
        <h2 id="homeParagraph">
          It’s empty ! <br />
          Catch’em Now !
        </h2>
      </div>
    </>
  );
}

export default Home;
