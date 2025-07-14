 import React  from 'react'
 import { Navigate } from 'react-router-dom'

 
export default function ProtectRouter({ children }) {
  if (localStorage.getItem('usertoken') !== null) {
    return children;  // Render children if token exists
  } else {
    return <Navigate to="/login" />;  // Redirect to login if no token
  }
}