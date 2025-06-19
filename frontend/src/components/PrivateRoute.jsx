import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoute = () => {
  const { user } = useAuth();
  console.log(user);

  if (user === null)
    return <p className="flex text-4xl text-center">Loading...</p>;
  if (user === false) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;
