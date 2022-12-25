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
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
