import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Homepage/Homepage";
import Card from "./components/Card/Card";
import Pokemonfiltre from "./components/Pokemonfiltre/Pokemonfiltre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/Card/:pokemonName",
    element: <Card />,
  },
  {
    path: "Pokemonfiltre",
    element: <Pokemonfiltre />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
