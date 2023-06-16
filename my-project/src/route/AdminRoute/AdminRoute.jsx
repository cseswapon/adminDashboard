/**
 * Title: Online E-commerce Product Sell
 * Description: This is a admin route. client with this admin route client direct logout
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import { Navigate, useLocation } from "react-router-dom";
import useCookies from "../../hooks/useCookies";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  // our custom hook use
  let useCooke = useCookies("user_login");

  if (useCooke === null) {
    localStorage.clear();
    return <Navigate to="/" state={{ from: location }} />;
  }
// admin login condition
  const userLogIn =
    JSON.parse(localStorage.getItem("login"))?.userLogIn &&
    JSON.parse(localStorage.getItem("login"))?.role === "admin" &&
    JSON.parse(localStorage.getItem("login"))?.email;
  // console.log('Admin Route',userLogIn);
  if (!userLogIn) {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const name = cookie.trim().split("=")[0];
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  } else if (userLogIn && useCooke) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
};

export default AdminRoute;
