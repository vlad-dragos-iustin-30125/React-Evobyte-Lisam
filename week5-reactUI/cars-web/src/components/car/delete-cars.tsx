import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteCar() {
  const [open, setOpen] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleNo = () => {
    setConfirmation(false);
    setOpen(false);
  };
  const handleYes = () => {
    setConfirmation(true);
    setOpen(false);
  };

  useEffect(() => {
    const DeleteCar = async () => {
      if (confirmation) {
        const response = await fetch(
          `https://localhost:7113/api/Cars/${userId}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
      }
    };
    DeleteCar();
  }, [userId, confirmation]);
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Delete Car</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo}>No</Button>
          <Button onClick={handleYes}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/cars");
        }}
      >
        Back
      </Button>
    </div>
  );
}
