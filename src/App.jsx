// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa tu LandingPage y el resto de páginas:
import LandingPage from "./LandingPage";
import Servicios from "./pages/Servicios";
import Biografia from "./pages/Biografia";
import Blog from "./pages/Blog";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

function App() {
  // Creamos el router con createBrowserRouter y habilitamos los "future flags"
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/servicios",
        element: <Servicios />,
      },
      {
        path: "/biografia",
        element: <Biografia />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/galeria",
        element: <Galeria />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      // Ruta comodín para “404”
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    {
      future: {
        // Activa startTransition anticipado (v7)
        v7_startTransition: true,
        // Activa la nueva lógica de resolución de rutas con splat
        v7_relativeSplatPath: true,
      },
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
