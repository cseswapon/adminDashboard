/**
 * Title: Online E-commerce Product Sell
 * Description: Our Application Header Section and add logout mechanism.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import { Link } from "react-router-dom";
import cart from "../../../assets/icons8-cart.gif";
import logo from "../../../assets/vite.svg";
const Header = () => {
  // this function call all application logout
  const handelLogout = () => {
    // cookies delete
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    localStorage.clear();
    window.location.reload();
  };
  // get the name localStorage
  const name = JSON.parse(localStorage.getItem("login")).name || 'avatar';
  // console.log(name);
  return (
    <>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* logo section */}
          <div className="text-white font-semibold ">
            <Link className="flex items-center" to="/">
              {" "}
              <img src={logo} className="me-2" alt="avatar" /> My E-commerce
              Store
            </Link>
          </div>
          {/* cart, logout, and show client name */}
          <ul className="hidden sm:flex space-x-4">
            <li>
              <p className="text-white ">Welcome To, {name} 🎇</p>
            </li>
            <li>
              <Link to="/cart">
                <img className="w-7 rounded" src={cart} alt="avatar" />
              </Link>
            </li>
            <li>
              {/* This is a logout button */}
              <button
                onClick={() => handelLogout()}
                className="text-red-600 hover:text-gray-300"
              >
                Logout
              </button>
            </li>
          </ul>
          {/* toggle button with a mobile responsive */}
          <div className="sm:hidden">
            <button className="text-white hover:text-gray-300">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
