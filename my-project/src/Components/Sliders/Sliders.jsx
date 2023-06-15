

const Sliders = ({ image, caption }) => {
  return (
    <div>
      <img src={image} alt="Slide" className="w-full h-auto" />
      <div className="caption">{caption}</div>
    </div>
  );
};

export default Sliders;