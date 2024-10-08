import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Slide,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { AddUser } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function AddUsers() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState("");
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const addData = { username, fullname, phone, device, role, email, password };
    AddUser(addData)
      .then((response) => {
        setMessage(response.data);
        setEmail("");
        setDevice("");
        setFullname("");
        setRole("");
        setPhone("");
        setUsername("");
        setPassword("");
        setSeverity("success");
        handleClick();
      })
      .catch((error) => {
        console.error("error adding user:", error);
        setMessage("Error while adding user");
        setSeverity("error");
        handleClick();
      });
  };

  const handleReset = () => {
    setEmail("");
    setDevice("");
    setFullname("");
    setRole("");
    setPhone("");
    setUsername("");
    setPassword("");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-50 m-auto mt-3 border rounded text-bg-light  ">
      <h1 className="mt-3 text-center">Add User to the Team</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1 },
          marginTop: "5px",
          justifyContent: "center",
        }}
      >
        <div className=" d-flex align-items-center ">
          <InputLabel className="fs-6 px-4 fw-bold">Email</InputLabel>
          <TextField
            required
            type="email"
            label="Email"
            sx={{ width: "50%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" d-flex align-items-center">
          <InputLabel className="fs-6 px-3 fw-bold">Name</InputLabel>
          <TextField
            required
            label="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <InputLabel className="fs-6 px-3 fw-bold">Mobile</InputLabel>
          <TextField
            required
            type="number"
            label="Mobile"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="d-flex px-2 align-items-center">
          <InputLabel className="fs-6 px-3 fw-bold">Device</InputLabel>
          <TextField
            required
            label="Device"
            type="number"
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            helperText="Enter number between 1 to 10"
          />
          <InputLabel className="fs-6 px-3 fw-bold">Select Role</InputLabel>
          <TextField
          select
          label="Select Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Select a role"
            sx={{minWidth:"25%"}}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </TextField>
        </div>
        <div className="d-flex px-2 align-items-center">
          <InputLabel className="fs-6 fw-bold ">Username</InputLabel>
          <TextField
            required
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputLabel className="fs-6  fw-bold">Password</InputLabel>
          <TextField
            required
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </div>
        <div className="text-center m-3">
          <Button
            variant="contained"
            color="error"
            sx={{ m: 1 }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/admin/users");
            }}
          >
            Cancle
          </Button>
          <Button variant="contained" sx={{ m: 1 }} onClick={handleReset}>
            Reset
          </Button>
          <Button
            variant="contained"
            sx={{ m: 1 }}
            color="success"
            type="submit"
            onClick={handleClick(SlideTransition)}
          >
            Add User
          </Button>
        </div>
      </Box>
      <Snackbar
        open={alert.open}
        onClose={handleClose}
        TransitionComponent={alert.Transition}
        key={alert.Transition}
        autoHideDuration={3000}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
