/**
 * Title: Online E-commerce Product Sell
 * Description: This is a Public route call by login component not show use this route.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import { Navigate, useLocation } from "react-router-dom";
import useCookies from "../../hooks/useCookies";

const PublicRoute = ({ children }) => {
  const location = useLocation();
  // check login
  const userLogIn = JSON.parse(localStorage.getItem("login"))?.userLogIn;
  let useCooke = useCookies("user_login");
  if (userLogIn && useCooke) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default PublicRoute;
