import Logo from "/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, AlertTitle, Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { UserSignin } from "../api/api";
import { useNavigate } from "react-router-dom";
import "../index.css";
import AuthContext from "../Context/AuthProvider ";
// import {jwtDecode} from 'jwt-decode';

const logoStyle = {
  width: "4rem",
  height: "auto",
  cursor: "pointer",
};

const defaultTheme = createTheme();

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill out all fields");
      return;
    }
    const user = { username, password };
    UserSignin(user)
    .then((response) => {
      const data = response.data;
      console.log(data)
      if (data.message === "User signed in successfully"){
        // const token = data.token;
        // const user = jwtDecode(token);
        // Cookies.set('user', user, { expires: 7 });
        // setAuth({ token, user });
        const user = data.user;
        setAuth({ user }, rememberMe);
        navigate(user.role === "admin" ? "/admin" : "/user", { replace: true }); 
      }else {
        setError(data.message);
      console.error(data.message);
      }
    })
    .catch((error) => {
      setError(error.message);
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
            <FormControlLabel
              control={<Checkbox value={rememberMe} onChange={(e) => setRememberMe(e.target.value)} color="primary" />}
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
