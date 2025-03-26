import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // const email = localStorage.getItem('email');
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn')) || false; // Ensure boolean value
  console.log("THis is loggedIn status:", loggedIn);
  return loggedIn ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
