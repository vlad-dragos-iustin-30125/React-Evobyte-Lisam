import { useEffect, useState } from "react";
import { Car } from "../../models/Car";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailsCar() {
  const navigate = useNavigate();

  const [car, setCar] = useState<Car | null>(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://localhost:7113/api/Cars/${userId}`)
      .then((response) => response.json())
      .then((data) => setCar(data));
  }, [userId]);

  if (car === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Details for {car.name}</h1>
      <table>
        <tbody>
          <tr>
            <th>Number ID</th>
            <td>{car.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{car.name}</td>
          </tr>
          <tr>
            <th>Descriptiom</th>
            <td>{car.description}</td>
          </tr>
          <tr>
            <th>DOM</th>
            <td>{car.dom}</td>
          </tr>
          <tr>
            <th>Fuel</th>
            <td>{car.fuel}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          navigate("/cars");
        }}
      >
        Back
      </button>
    </>
  );
}
