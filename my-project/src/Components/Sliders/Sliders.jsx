

const Sliders = ({ image, caption }) => {
  return (
    <div>
      <img src={image} alt="Slide" className="h-auto" style={{width:"100%"}} />
      {/* <div className="caption">{caption}</div> */}
    </div>
  );
};

export default Sliders;