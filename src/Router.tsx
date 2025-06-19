import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { UnderConstruction } from "./pages/UnderConstruction";
import { Animal } from "./pages/Animal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/underConstruction",
        element: <UnderConstruction />,
      },
      {
        path: "/animal/:id",
        element: <Animal />,
      },
    ],
  },
]);
