import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/homePage/homepage";
import Card from "./components/Card/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/App" element={<App />} />
      <Route path="/Card/:pokemonName" element={<Card />} />
    </Routes>
  </Router>
);
