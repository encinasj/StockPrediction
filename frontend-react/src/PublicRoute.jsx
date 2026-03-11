// PublicRoute.jsx (con Outlet)
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const { isLoggedIn } = useContext(AuthContext) || {};

  // Si NO está autenticado, renderiza las rutas hijas (login/register)
  if (!isLoggedIn) return <Outlet />;

  // Si SÍ está autenticado, redirige al dashboard
  return <Navigate to="/dashboard" />;
};

export default PublicRoute;
