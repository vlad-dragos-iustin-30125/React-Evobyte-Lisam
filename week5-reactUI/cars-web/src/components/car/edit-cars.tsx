import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Car } from "../../models/Car";
import { Box, Button, TextField } from "@mui/material";

export default function EditCar() {
  const navigate = useNavigate();

  const [car, setCar] = useState<Car | null>(null);
  const { userId } = useParams();
  useEffect(() => {
    fetch(`https://localhost:7113/api/Cars/${userId}`)
      .then((response) => response.json())
      .then((data) => setCar(data));
  }, [userId]);

  const handleUpdate = () => {
    const updatedCar = {
      id: car?.id,
      name: car?.name,
      description: car?.description,
      DOM: car?.dom,
      fuel: car?.fuel,
    };

    fetch(`https://localhost:7113/api/Cars/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    });
  };

  if (car === null) {
    return <p>Loading...</p>;
  }
  return (
    <Box>
      <div>
        <TextField
          sx={{ m: 1.5, width: "50ch" }}
          margin="normal"
          label="Id"
          defaultValue={car.id}
          variant="standard"
        />
      </div>
      <div>
        <TextField
          sx={{ m: 1.5, width: "50ch" }}
          margin="normal"
          label="Name"
          defaultValue={car.name}
          onChange={(e) => setCar({ ...car, name: e.target.value })}
          variant="standard"
        />
      </div>
      <div>
        <TextField
          sx={{ m: 1.5, width: "50ch" }}
          label="Description"
          defaultValue={car.description}
          onChange={(e) => setCar({ ...car, description: e.target.value })}
          variant="standard"
        />
      </div>

      <div>
        <TextField
          sx={{ m: 1.5, width: "50ch" }}
          margin="normal"
          label="DOM"
          defaultValue={car.dom}
          onChange={(e) => setCar({ ...car, dom: e.target.value })}
          variant="standard"
        />
      </div>
      <div>
        <TextField
          sx={{ m: 1.5, width: "50ch" }}
          margin="normal"
          label="Fuel"
          defaultValue={car.fuel}
          onChange={(e) => setCar({ ...car, fuel: e.target.value })}
          variant="standard"
        />
      </div>
      <Button
        onClick={() => {
          navigate("/cars");
        }}
      >
        Back
      </Button>
      <Button onClick={handleUpdate}>Update</Button>
    </Box>
  );
}
