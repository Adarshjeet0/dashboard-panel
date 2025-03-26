import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/reducers/authReducer';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({name: '', email: '', password: '', loggedIn: true });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, loggedIn: true });
    dispatch(signup(credentials));
    navigate('/');
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Signup
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Name"
            type="text"
            fullWidth
            margin="normal"
            value={credentials.name}
            onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign Up
          </Button>

          <Box sx={{ mt: 2 }}>
            <Link to="/login">I am a existing User</Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;