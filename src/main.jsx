import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import CreateArticle from "./pages/CreateArticle.jsx";

import "./styles/app.css";
import "./styles/navbar.css";
import "./styles/articles.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Articles />,
        loader: () =>
          axios
            .get("http://localhost:8000/articles")
            .then((response) => response.data),
      },
      {
        path: "/articles/:id",
        element: <ArticleDetails />,
      },
      {
        path: "/create",
        element: <CreateArticle />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
