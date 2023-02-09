import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/Baselayouts";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
