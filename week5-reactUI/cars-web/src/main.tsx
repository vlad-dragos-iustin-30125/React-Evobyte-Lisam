import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShowAllCars } from "./components/car/show-all-cars.tsx";
import DetailsCar from "./components/car/details-cars.tsx";
import EditCar from "./components/car/edit-cars.tsx";
import DeleteCar from "./components/car/delete-cars.tsx";
import AddCar from "./components/car/add-cars.tsx";

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
    path: "/cars/edit/:userId",
    element: <EditCar />,
  },
  {
    path: "/cars/delete/:userId",
    element: <DeleteCar />,
  },
  {
    path: "/cars/addcar/:userId",
    element: <AddCar />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
