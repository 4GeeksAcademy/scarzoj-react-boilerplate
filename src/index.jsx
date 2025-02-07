import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import { FavoritesProvider } from "./context/Favorites";

import { App } from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context/User";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
