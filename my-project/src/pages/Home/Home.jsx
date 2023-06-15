import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import Sliders from "../../Components/Sliders/Sliders";
import withDashboard from "../../Components/DashBoardLayout/DashBoardLayout";
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

  return (
    <div className="container ms-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Sliders key={index} image={slide.image} caption={slide.caption} />
        ))}
      </Slider>
    </div>
  );
};


export default withDashboard(Home);