import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const ProtectedRoute = () => {
  const user = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
