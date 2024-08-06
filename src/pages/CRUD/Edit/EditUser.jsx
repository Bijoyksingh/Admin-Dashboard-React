import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputLabel,
  Snackbar,
  Slide,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GetUser, UpdateUser } from "../../../api/api";
import { useParams, useNavigate } from "react-router-dom";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function EditUser() {
  const [showPassword, setShowPassword] = useState(false);
  const { id } = useParams();
  const { gotUser } = GetUser(id);

  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [device, setDevice] = useState();
  const [phone, setPhone] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    if (gotUser) {
      setEmail(gotUser.email);
      setFullname(gotUser.fullname);
      setDevice(gotUser.alotdevices);
      setPhone(gotUser.phone);
      setUsername(gotUser.username);
      setPassword(gotUser.password);
    }
  }, [gotUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { username, fullname, phone, device, email, password };
    UpdateUser(id, newData)
      .then((response) => {
        setMessage(response.data);
        navigate("/admin/users");
      })
      .catch((error) => {
        console.error("error while updating user:", error);
        setMessage("Error while update user");
        setSeverity("error");
        handleClick();
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-50 m-auto mt-3 border rounded text-bg-light">
      <h1 className="mt-3 text-center">Edit Details of {gotUser.fullname}</h1>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
          marginTop: "5px",
          justifyContent: "center",
        }}
      >
        <div className=" d-flex align-items-center ">
          <InputLabel className="fs-6 px-4 fw-bold">Email</InputLabel>
          <TextField
            value={email}
            sx={{ width: "50%" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" d-flex align-items-center">
          <InputLabel className="fs-6 px-3 fw-bold">Name</InputLabel>
          <TextField
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <InputLabel className="fs-6 px-3 fw-bold">Mobile</InputLabel>
          <TextField value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="d-flex px-2 align-items-center">
          <InputLabel className="fs-6 px-3 fw-bold">Device</InputLabel>
          <TextField
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            helperText="Enter number between 1 to 10"
          />
        </div>
        <div className="d-flex px-2 align-items-center">
          <InputLabel className="fs-6 fw-bold ">Username</InputLabel>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputLabel className="fs-6  fw-bold">Password</InputLabel>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
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
        <div className="d-flex m-3 justify-content-evenly">
          <Button
            variant="contained"
            color="error"
            onClick={(e) => {
              e.preventDefault();
              navigate("/admin/users");
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
            Update
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
