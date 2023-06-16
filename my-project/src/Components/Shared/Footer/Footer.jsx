/**
 * Title: Online E-commerce Product Sell
 * Description: Our Application Footer Section.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import { Link } from "react-router-dom";
import logo from "../../../assets/vite.svg";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
          {/* logo and name */}
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="font-semibold text-lg">
              <Link to={"/"}>
                <img src={logo} alt="avatar" />
              </Link>
              My E-commerce Store
            </span>
            <p className="text-gray-400 text-sm">
              {/* Client PC date zone */}
              © {[new Date().toDateString().split(" ")[3]]} All rights reserved
            </p>
          </div>
          {/* categories */}
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="font-semibold mb-2">Categories</span>
            <p className="text-white hover:text-gray-300">
              Our Product all Electronics
            </p>
          </div>
          {/* some kind of link */}
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="font-semibold mb-2">Information</span>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/product" className="text-white hover:text-gray-300">
              Product
            </Link>
            <Link to="/cart" className="text-white hover:text-gray-300">
              Cart
            </Link>
          </div>
          {/* social media link */}
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="font-semibold mb-2">Follow Us</span>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/cseswapon"
                className="text-white hover:text-gray-300"
                target="blank"
              >
                <img
                  className="w-14 rounded object-cover"
                  src="https://logodix.com/logo/1050316.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/cseswapon"
                className="text-white hover:text-gray-300"
                target="blank"
              >
                <img
                  className="w-14 rounded object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoahAp9ufyDM21vGrV8DkRKTdG6Dkj9Tp-4W8dXElh10ZoaBy4EJdAyDXs0Ir2McabpBs&usqp=CAU"
                  alt="avatar"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/cseswapon/"
                className="text-white hover:text-gray-300"
                target="blank"
              >
                <img
                  className="w-14 rounded object-cover"
                  src="https://static.vecteezy.com/system/resources/previews/009/097/186/original/blue-color-white-background-linkedin-design-logo-sign-symbol-free-vector.jpg"
                  alt="avatar"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
