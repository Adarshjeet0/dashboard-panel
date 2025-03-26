// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { authSelector, login } from '../../redux/reducers/authReducer';
// import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Signup from './Signup';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const dispatch = useDispatch();
//   const authUser = useSelector(authSelector);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(credentials, () => navigate('/')));
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h4" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//           <TextField
//             label="Username"
//             fullWidth
//             margin="normal"
//             value={credentials.username}
//             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={credentials.password}
//             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//           />
//           {authUser.error && <Typography color="error">Invalid Credentials</Typography>}
          
//           <Button type="submit" variant="contained" sx={{ mt: 3 }}>
//             Sign In
//           </Button>
//           <Link href="Signup">I am New User</Link>
          
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, login } from '../../redux/reducers/authReducer';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const authUser = useSelector(authSelector);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
    navigate('/'); // Navigate after dispatch
    console.log("navigated");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Email"
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
          {authUser.error && <Typography color="error">Invalid Credentials</Typography>}

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign In
          </Button>
          
          <Box sx={{ mt: 2 }}>
            <Link to="/signup">I am a New User</Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
