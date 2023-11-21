import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Favoris from "../Favoris/Favoris";

function Home() {
  return (
    <>
      <Navbar />
      {localStorage.getItem("favoris") === null ||
      localStorage.getItem("favoris") === "[]" ? (
        <div id="div-image">
          <h2 id="homeParagraph">
            It’s empty ! <br />
            Catch’em Now !
          </h2>
          <Link to="/App">
            <img
              id="homeImage"
              src="src/assets/homepicture.png"
              alt="pokemon click me "
            />
          </Link>
        </div>
      ) : (
        <Favoris />
      )}
    </>
  );
}

export default Home;
