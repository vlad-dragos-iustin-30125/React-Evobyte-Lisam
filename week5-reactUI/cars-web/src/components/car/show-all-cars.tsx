import { useEffect, useState } from "react";
import { Car } from "../../models/Car";

import { useNavigate } from "react-router-dom";

export function ShowAllCars() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7113/api/Cars")
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <>
      <h1>Cars</h1>
      <p>Here is a list of all cars</p>
      <table>
        <thead>
          <tr>
            <th>Number ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>DOM</th>
            <th>Fuel</th>
          </tr>
        </thead>
        {cars.map((car: Car, i: number) => (
          <tr key={car.id}>
            <td>{i + 1}</td>
            <td>{car.name}</td>
            <td>{car.description}</td>
            <td>{car.dom}</td>
            <td>{car.fuel}</td>
            <td>
              <button onClick={() => navigate(`/cars/details/${car.id}`)}>
                Details
              </button>{" "}
              | <button>Edit</button> | <button>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
