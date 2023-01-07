import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import Home from "./App";
import HangmenGame from "./pages/hangmenGame/hangmenGame";
import Buttons from "./pages/buttons/buttons";
import HashGame from "./pages/ticTacToe/hashGame";
import Marketplace from "./pages/marketplace/marketplace";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hangmanGame",
    element: <HangmenGame />,
  },
  {
    path: "/hashGame",
    element: <HashGame />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/buttons",
    element: <Buttons />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
