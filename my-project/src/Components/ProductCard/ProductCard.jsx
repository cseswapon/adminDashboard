import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { _id, name, image, price, description, brand } = props.product;

  const addToCart = (id, name, brand, image, price) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ id, name, brand, image, price, quantity: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Cart Added Successful");
  };

  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src={image}
            alt="avatar"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-gray-800 font-bold mb-2">Price:${price}</p>
            <p className="text-gray-600 mb-4">Brand: {brand}</p>
            <button
              onClick={() => addToCart(_id, name, brand, image, price)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
            <Link to={`/product/${_id}`}>
              <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded ms-5">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
