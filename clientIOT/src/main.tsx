import React from "react";
import ReactDOM from "react-dom/client";
import { Rutas } from "./Routes.tsx";
import "./styles/index.css";
import { AuthProvider } from "./context/ContextProvaider.tsx";
import { Route_Provider } from "./context/ContextDashboardNavegation.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Route_Provider>
        <Rutas />
      </Route_Provider>
    </AuthProvider>
  </React.StrictMode>
);
