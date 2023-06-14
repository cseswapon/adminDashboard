import { Navigate, useLocation } from "react-router-dom";
import useCookies from "../../hooks/useCookies";

const PublicRoute = ({ children }) => {
  const location = useLocation();
  const userLogIn = JSON.parse(localStorage.getItem("login"))?.userLogIn;
  let useCooke = useCookies("user_login");
  if (userLogIn && useCooke) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default PublicRoute;
