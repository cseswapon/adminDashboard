import { Navigate, useLocation } from "react-router-dom";
import useCookies from "../../hooks/useCookies";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  let useCooke = useCookies("user_login");

  if (useCooke === null) {
    localStorage.clear();
    return <Navigate to="/login" state={{ from: location }} />;
  }

  const userLogIn = JSON.parse(localStorage.getItem("login"))?.userLogIn;

  if (!userLogIn) {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const name = cookie.trim().split("=")[0];
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  } else if (userLogIn && useCooke) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
