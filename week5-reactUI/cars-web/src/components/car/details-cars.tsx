import { useEffect, useState } from "react";
import { Car } from "../../models/Car";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Container,
} from "@mui/material";

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
    <Container maxWidth="lg">
      <h1>Details for {car.name}</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableRow>
            <TableCell>Number ID</TableCell>
            <TableCell>{car.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>{car.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>{car.description}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>DOM</TableCell>
            <TableCell>{car.dom}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Fuel</TableCell>
            <TableCell>{car.fuel}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Button
        onClick={() => {
          navigate("/cars");
        }}
      >
        Back
      </Button>
    </Container>
  );
}
