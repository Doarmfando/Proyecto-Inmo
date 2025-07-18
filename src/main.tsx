import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createHashRouter,
  Navigate,
} from "react-router-dom";

import App from "./App";
import Login from "./pages/login";
import Inicio from "./pages/Inicio";
import Propiedades from "./pages/propiedades/propiedades";
import NuevaPropiedad from "./pages/propiedades/nueva";


// ⚠️ Estas son vistas futuras que puedes crear después
// import Propiedades from "./pages/propiedades";
// import Interesados from "./pages/interesados";
// import Cotizaciones from "./pages/cotizaciones";
// import Seguimiento from "./pages/seguimiento";
// import Documentos from "./pages/documentos";
// import Usuarios from "./pages/usuarios";
// import Configuracion from "./pages/configuracion";

// Estilos globales
import "./index.css";
import "./styles/animatedBackground.css";

// Definición de rutas
const router = createHashRouter([
  {
    path: "/",
    element: <App />, // Contiene <Outlet />
    children: [
      // Redirigir raíz a login
      { index: true, element: <Navigate to="login" /> },

      // Rutas actuales
      { path: "login", element: <Login /> },
      { path: "inicio", element: <Inicio /> },
      { path: "propiedades", element: <Propiedades /> }, // ✅ nueva ruta
      { path: "propiedades/nueva", element: <NuevaPropiedad /> },


      // Rutas futuras
      // { path: "propiedades", element: <Propiedades /> },
      // { path: "interesados", element: <Interesados /> },
      // { path: "cotizaciones", element: <Cotizaciones /> },
      // { path: "seguimiento", element: <Seguimiento /> },
      // { path: "documentos", element: <Documentos /> },
      // { path: "usuarios", element: <Usuarios /> },
      // { path: "configuracion", element: <Configuracion /> },
    ],
  },
]);

// Renderizar aplicación
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
