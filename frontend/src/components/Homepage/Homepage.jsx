import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Favoris from "../Favoris/Favoris";

function Home() {
  return (
    <>
      <Navbar />
      {<Favoris /> !== null ? (
        <Favoris />
      ) : (
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
      )}
    </>
  );
}

export default Home;
