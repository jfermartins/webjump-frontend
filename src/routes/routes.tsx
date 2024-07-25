import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../views/home";
import Layout from "../views/layout";
import Shop from "../views/shop";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop/:id",
        element: <Shop />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <span style={{ color: "red", fontWeight: "bold" }}>Rota não encontrada</span>
      </div>
    ),
  },
];

export default routes;
