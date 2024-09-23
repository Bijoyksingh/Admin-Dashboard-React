import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Select, MenuItem, Tooltip, Icon, Box, FormControl, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
  },
});

export default function Extra(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // admin or user
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [age, setAge] =useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(setAge())
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password' && role === 'admin') {
      setIsLoggedIn(true);
      localStorage.setItem('role', 'admin');
    } else if (username === 'user' && password === 'password' && role === 'user') {
      setIsLoggedIn(true);
      localStorage.setItem('role', 'user');
    } else {
      setError('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    if (role === 'admin') {
      return <AdminDashboard />;
    } else {
      return <UserDashboard />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justify="center">
      
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={handleUsernameChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  label="Role"
                  variant="outlined"
                  value={role}
                  onChange={handleRoleChange}
                  fullWidth
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography variant="body1" color="error">
                    {error}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </form>
          <Tooltip
      title="This is a plus circle icon"
      placement="top"
      arrow
      leaveDelay={200}
    >
      <Icon>
        icon
        <i className="fas fa-plus-circle" />
      </Icon>
    </Tooltip>
        </Grid>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </Grid>
    </ThemeProvider>
  );
};

const AdminDashboard = () => {
  return <Typography variant="h4" gutterBottom>Welcome, Admin!</Typography>;
};

const UserDashboard = () => {
  return <Typography variant="h4" gutterBottom>Welcome, User!</Typography>;
};

