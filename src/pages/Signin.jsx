import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Logo from "/logo.png";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, AlertTitle } from "@mui/material";
import { useState } from "react";
import { UserSignin } from "../api/api";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Cookies } from "react-cookie";

const logoStyle = {
  width: "4rem",
  height: "auto",
  cursor: "pointer",
};

const defaultTheme = createTheme();

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill out all fields");
      return;
    }
    const user = { username, password };
    UserSignin(user)
    .then((response) => {
      const { token } = response.data;
      // Store the token in a secure cookie
      cookies.set('token', token, { secure: true, sameSite: 'strict', httpOnly: true });
      if (response.data.role === "admin") {
        // Redirect to admin page
        navigate("/admin", { replace: true });
      } else {
        // Redirect to user page
        navigate("/user", { replace: true });
      }
      console.log(response);
    })
    .catch((error) => {
      setError(error.response.data.message);
      console.error(error);
    });
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            {/* <div className="d-flex align-items-center justify-content-center">
              <InputLabel className="fs-6 px-3 fw-bold">Select Role:</InputLabel>
            <Select
              variant="outlined"
              value={role}
              onChange={handleRoleChange}
              sx={{ width:"8rem"}}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
            </div> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
