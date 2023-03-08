import { Navigate } from "react-router-dom";
import { useAuthContext } from "./contexts/Auth/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { loginUser } = useAuthContext();

  if (!loginUser) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
