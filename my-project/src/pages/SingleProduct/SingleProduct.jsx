import { useParams } from "react-router-dom";
import withDashboard from "../../Components/DashBoardLayout/DashBoardLayout";
import { useEffect, useState } from "react";
import { instance } from "../../api/axios";

const SingleProduct = () => {
  const { id } = useParams();
  // console.log(id);
  const [single, setSingle] = useState({});

  useEffect(() => {
    instance
      .get(`product/${id}`)
      .then((res) => setSingle(res.data.data))
      .catch((err) => console.log(err.message));
  }, [id]);

  console.log(single);

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
      <div className="w-full p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src={single.image}
            alt="avatar"
            className="w-2/4 mx-auto rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{single.name}</h3>
            <p className="text-gray-800 font-bold mb-2">{single.description}</p>
            <p className="text-gray-800 font-bold mb-2">
              Price:${single.price}
            </p>
            <p className="text-gray-600 mb-4">Brand: {single.brand}</p>
            <button
              onClick={() =>
                addToCart(
                  single._id,
                  single.name,
                  single.brand,
                  single.image,
                  single.price
                )
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withDashboard(SingleProduct);
