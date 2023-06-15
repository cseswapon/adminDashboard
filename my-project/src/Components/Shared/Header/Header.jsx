const Header = () => {
  const handelLogout = () => {
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
  return (
    <>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-semibold">My E-commerce Store</div>
          <ul className="hidden sm:flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Account
              </a>
            </li>
            <li>
              <button
                onClick={() => handelLogout()}
                className="text-red-600 hover:text-gray-300"
              >
                Logout
              </button>
            </li>
          </ul>
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
