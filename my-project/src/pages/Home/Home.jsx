import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Sliders from "../../Components/Sliders/Sliders";
import withDashboard from "../../Components/DashBoardLayout/DashBoardLayout";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import Product from "../../Components/Product/Product";
const Home = () => {
  const slides = [
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/a68ee673-cc5e-40f9-b715-fca4fdc2e76b.jpg_1200x1200.jpg",
      caption: "Slide 1",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/9d9f5d77-a58b-49f3-bb83-541bd1001588.jpg",
      caption: "Slide 2",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/2d001db8-dc9f-4575-8b01-6c158c511d59.jpg",
      caption: "Slide 3",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/bba22a95-a7ea-4d1d-9c07-95ce73f7e7a4.jpg",
      caption: "Slide 1",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/c6031749-0d89-4849-a2d0-3256f3a349c3.jpg",
      caption: "Slide 2",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/2d001db8-dc9f-4575-8b01-6c158c511d59.jpg",
      caption: "Slide 3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const admin = JSON.parse(localStorage.getItem("login"))?.role === "admin";
  return (
    <>
      <div className="container mx-auto relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Sliders key={index} image={slide.image} caption={slide.caption} />
          ))}
        </Slider>
        <div className="absolute top-0">
          <ul className="bg-white shadow-sm rounded p-2  mt-4 ">
            <li className="my-3">
              <Link to="/">Home</Link>
            </li>
            <li className="my-3">
              <Link to="/product">Product</Link>
            </li>
            {admin && (
              <li className="my-3">
                <Link to="/add_product">Add Product</Link>
              </li>
            )}
            <li className="my-3">
              <Link to="/cart">Cart</Link>
            </li>
            {admin && (
              <li className="my-3">
                <Link to="/add_customer">Add Customer</Link>
              </li>
            )}
            {admin && (
              <li className="my-3">
                <Link to="/all_customer">List All Customer</Link>
              </li>
            )}
            {admin && (
              <li className="my-3">
                <Link to="/order_list">Order List</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="container my-5">
        <img className="mx-auto" src={banner} alt="avatar" />
      </div>
      {/* product Section */}
      <div className="container mx-auto my-4">
        <Product />
      </div>
    </>
  );
};

export default withDashboard(Home);
