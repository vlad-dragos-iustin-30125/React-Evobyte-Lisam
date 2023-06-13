import { useEffect, useState } from "react";
import { Car } from "../../models/Car";

import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

export function ShowAllCars() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7113/api/Cars")
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <Container maxWidth="lg">
      <h1>Cars</h1>
      <Button variant="contained">Add Car</Button>
      <p>Here is a list of all cars</p>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number ID </TableCell>
              <TableCell>Name </TableCell>
              <TableCell>Description </TableCell>
              <TableCell>DOM</TableCell>
              <TableCell>Fuel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car: Car, i: number) => (
              <TableRow key={car.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{car.name}</TableCell>
                <TableCell>{car.description}</TableCell>
                <TableCell>{car.dom}</TableCell>
                <TableCell>{car.fuel}</TableCell>

                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/cars/details/${car.id}`)}
                  >
                    Details
                  </Button>{" "}
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/cars/edit/${car.id}`)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/cars/delete/${car.id}`)}
                  >
                    Delete
                  </Button>{" "}
                </ButtonGroup>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
