import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

export default function Extra1(){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (role === 'admin') {
      const adminData = {
        username,
        email,
        password,
        confirmPassword,
      };
      axios.post('/api/admin/signup', adminData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };
      axios.post('/api/user/signup', userData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Sign Up Form</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Username (Admin only)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={role !== 'admin'}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="First Name (User only)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={role !== 'user'}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Last Name (User only)"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={role !== 'user'}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Select Role:</Typography>
        <Button variant="outlined" color="primary" onClick={() => setRole('admin')}>
          Admin
        </Button>
        <Button variant="outlined" color="primary" onClick={() => setRole('user')}>
          User
        </Button>
      </Grid>
    </Grid>
  );
};