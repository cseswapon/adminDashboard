const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="font-semibold text-lg">My E-commerce Store</span>
            <p className="text-gray-400 text-sm">© 2023 All rights reserved</p>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="font-semibold mb-2">Categories</span>
            <a href="#" className="text-white hover:text-gray-300">
              Electronics
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Clothing
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Home &amp; Kitchen
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Beauty &amp; Personal Care
            </a>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="font-semibold mb-2">Information</span>
            <a href="#" className="text-white hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact Us
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Terms &amp; Conditions
            </a>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="font-semibold mb-2">Follow Us</span>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
