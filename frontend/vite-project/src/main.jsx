import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Api from "./routes/Api.jsx";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import HomePage from "./routes/HomePage.jsx";
import Blogs from "./routes/Blogs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<HomePage />,
      },
      {
        path: "/api",
        element: <Api />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
