// PrivateRoute.jsx (con Outlet)
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isLoggedIn } = useContext(AuthContext) || {};
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
