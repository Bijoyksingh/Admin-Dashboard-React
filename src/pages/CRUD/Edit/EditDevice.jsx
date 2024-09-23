import {
  Alert,
  Box,
  Button,
  InputLabel,
  Snackbar,
  Slide,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GetDevice, UpdateDevice } from "../../../api/api";
import { useParams, useNavigate } from "react-router-dom";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function EditDevice() {
  const { id } = useParams();
  const { gotDevice } = GetDevice(id);
  const [dName, setDName] = useState("");
  const [partyCode, setPartyCode] = useState("");
  const [current, setCurrent] = useState("");
  const [temp, setTemp] = useState("");
  const [vibration, setVibration] = useState("");
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const [para3, setPara3] = useState("");
  const [para4, setPara4] = useState("");
  const [para5, setPara5] = useState("");
  const [para6, setPara6] = useState("");
  const [para7, setPara7] = useState("");
  const [para8, setPara8] = useState("");
  const [para9, setPara9] = useState("");
  const [para10, setPara10] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    open: false,
    Transition: SlideTransition,
  });
  const handleClick = (Transition) => () => {
    setAlert({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setAlert({
      open: false,
    });
  };
  const [severity, setSeverity] = useState("");

  useEffect(() => {
    if (gotDevice) {
      setDName(gotDevice.deviceName);
      setPartyCode(gotDevice.partyCode);
      setCurrent(gotDevice.current);
      setTemp(gotDevice.temperature);
      setVibration(gotDevice.vibration);
      setPara1(gotDevice.parameter1);
      setPara2(gotDevice.parameter2);
      setPara3(gotDevice.parameter3);
      setPara4(gotDevice.parameter4);
      setPara5(gotDevice.parameter5);
      setPara6(gotDevice.parameter6);
      setPara7(gotDevice.parameter7);
      setPara8(gotDevice.parameter8);
      setPara9(gotDevice.parameter9);
      setPara10(gotDevice.parameter10);
    }
  }, [gotDevice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeviceData = {
      dName,
      partyCode,
      current,
      temp,
      vibration,
      para1,
      para2,
      para3,
      para4,
      para5,
      para6,
      para7,
      para8,
      para9,
      para10,
    };
    UpdateDevice(id, newDeviceData)
      .then((response) => {
        setMessage(response.data.message);
        setSeverity("success");
        handleClick();
        setTimeout(() => {
          navigate("/admin/devices");
        }, 2000);
      })
      .catch((error) => {
        console.error("error while updating device:", error);
        setMessage("Error while update device in frontend");
        setSeverity("error");
        handleClick();
      });
  };

  return (
    <div className="w-75 m-auto mt-3 border rounded text-bg-light  ">
      <h1 className="mt-3 text-center">Edit {gotDevice.deviceName} Device</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1 },
          marginTop: "5px",
        }}
      >
        <div className=" d-flex align-items-center justify-content-center">
          <InputLabel className="fs-6 px-4 fw-bold">Device Name</InputLabel>
          <TextField
            required
            label="Device Name"
            value={dName}
            onChange={(e) => setDName(e.target.value)}
          />
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <InputLabel className="fs-6 px-3 fw-bold">Party Code</InputLabel>
          <TextField
            required
            label="Party Code"
            value={partyCode}
            onChange={(e) => setPartyCode(e.target.value)}
          />
          <InputLabel className="fs-6 px-3 fw-bold">Current</InputLabel>
          <TextField
            required
            // type="number"
            label="Current"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
        </div>
        <div className=" d-flex align-items-center justify-content-around">
          <InputLabel className="fs-6 px-3 fw-bold">Temperature</InputLabel>
          <TextField
            required
            label="Temperature"
            // type="number"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <InputLabel className="fs-6 fw-bold ">Vibration</InputLabel>
          <TextField
            required
            label="Vibration"
            value={vibration}
            onChange={(e) => setVibration(e.target.value)}
          />
          <InputLabel className="fs-6 fw-bold ">Parameter 1</InputLabel>
          <TextField
            required
            label="Parameter 1"
            value={para1}
            onChange={(e) => setPara1(e.target.value)}
          />
        </div>
        <div className=" d-flex align-items-center justify-content-around">
          <InputLabel className="fs-6 fw-bold ">Parameter 2</InputLabel>
          <TextField
            required
            label="Parameter 2"
            value={para2}
            onChange={(e) => setPara2(e.target.value)}
          />
          <InputLabel className="fs-6 fw-bold ">Parameter 3</InputLabel>
          <TextField
            required
            label="Parameter 3"
            value={para3}
            onChange={(e) => setPara3(e.target.value)}
          />
          <InputLabel className="fs-6 fw-bold ">Parameter 4</InputLabel>
          <TextField
            required
            label="Parameter 4"
            value={para4}
            onChange={(e) => setPara4(e.target.value)}
          />
        </div>
        <div className=" d-flex align-items-center justify-content-around">
          <InputLabel className="fs-6 fw-bold ">Parameter 5</InputLabel>
          <TextField
            required
            label="Parameter 5"
            value={para5}
            onChange={(e) => setPara5(e.target.value)}
          />
          <InputLabel className="fs-6 fw-bold ">Parameter 6</InputLabel>
          <TextField
            required
            label="Parameter 6"
            value={para6}
            onChange={(e) => setPara6(e.target.value)}
          />
          <InputLabel className="fs-6 fw-bold ">Parameter 7</InputLabel>
          <TextField
            required
            label="Parameter 7"
            value={para7}
            onChange={(e) => setPara7(e.target.value)}
          />
        </div>
        <div className=" d-flex align-items-center justify-content-around">
          <InputLabel className="fs-6 fw-bold ">Parameter 8</InputLabel>
          <TextField
            required
            label="Parameter 8"
            value={para8}
            onChange={(e) => setPara8(e.target.value)}
          />
          <InputLabel className="fs-6 fw-bold ">Parameter 9</InputLabel>
          <TextField
            required
            label="Parameter 9"
            value={para9}
            onChange={(e) => setPara9(e.target.value)}
          />
          <InputLabel className="fs-6 fw-bold ">Parameter 10</InputLabel>
          <TextField
            required
            label="Parameter 10"
            value={para10}
            onChange={(e) => setPara10(e.target.value)}
          />
        </div>
        <div className="d-flex m-3 justify-content-evenly">
          <Button
            variant="contained"
            color="error"
            onClick={(e) => {
              e.preventDefault();
              navigate("/admin/devices");
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="success"
            onClick={handleClick(SlideTransition)}
          >
            Update Device
          </Button>
        </div>
      </Box>
      <Snackbar
        open={alert.open}
        onClose={handleClose}
        TransitionComponent={alert.Transition}
        key={alert.Transition}
        autoHideDuration={6000}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
