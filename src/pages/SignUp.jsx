import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Logo from "/logo.png";
import "../index.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, AlertTitle, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { UserSignUp } from "../api/api";
import { useNavigate } from "react-router-dom";
const logoStyle = {
  width: "4rem",
  height: "auto",
  cursor: "pointer",
};

const defaultTheme = createTheme();

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !fullname || !role || !phone) {
      setError("Please fill out all fields");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(phone)) {
      setError(
        "Please enter a valid phone number with 10 digits (e.g. 1234567890)"
      );
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Invalid password, Password must contain: 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long."
      );
      return;
    }
    const userData = {
      username,
      email,
      password,
      fullname,
      role,
      phone,
    };
    UserSignUp(userData)
      .then((response) => {
        const { message } = response.data;
        if (message === "User account created successfully") {
          navigate(role === "admin" ? "/admin" : "/user");
        } else if (message === "Username already exists") {
          setError("Username already exists");
        } else if (message === "Email already exists") {
          setError("Email already exists");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className="signContainer">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 70, height: 70, m: 1, bgcolor: "white" }}>
            <img src={Logo} style={logoStyle} className="logo" alt="logo" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              autoFocus
            />
            <TextField
              required
              margin="normal"
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex align-items-center justify-content-center">
              <InputLabel className="fs-6 px-3 fw-bold">
                Select Role:
              </InputLabel>
              <Select
                variant="outlined"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                sx={{ width: "8rem" }}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </div>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
