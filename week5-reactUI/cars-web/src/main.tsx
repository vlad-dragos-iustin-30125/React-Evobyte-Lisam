import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShowAllCars } from "./components/car/show-all-cars.tsx";
import DetailsCar from "./components/car/details-cars.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cars",
    element: <ShowAllCars />,
  },
  {
    path: "/cars/details/:userId",
    element: <DetailsCar />,
  },
  {
    path: "/cars/update/:userId",
    element: <div>to do update</div>,
  },
  {
    path: "/cars/delete/:userId",
    element: <div>to do delete</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
