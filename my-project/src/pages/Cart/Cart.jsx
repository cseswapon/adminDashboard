import { useEffect, useState } from "react";
import withDashboard from "../../Components/DashBoardLayout/DashBoardLayout";
import { instance } from "../../api/axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const email = JSON.parse(localStorage.getItem("login")).email;
  useEffect(() => {
    const parsedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(parsedItems);
  }, []);

  const buyFromCart = (id, name, quantity, price) => {
    const newObj = {
      id,
      name,
      email,
      quantity,
      price,
    };

    instance
      .post("booked", newObj)
      .then((res) => {
        if (res.data.data) {
          const buy = cartItems.filter((item) => item.id !== id);
          setCartItems(buy);
          localStorage.setItem("cartItems", JSON.stringify(buy));
          alert(`Book Your Product`);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const removeFromCart = (id) => {
    const confirm = window.confirm("Are you sure you want to do this?");
    if (confirm) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4 text-center">My Cart</h1>
      <div className="flex flex-wrap">
        {cartItems.map((p, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={p.image}
                alt="avatar"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-800 font-bold mb-2">
                  Price: ${p.price}
                </p>
                <p className="text-gray-600 mb-4">Brand: {p.brand}</p>
                <p className="text-gray-600 mb-4">Quantity: {p.quantity}</p>

                <button
                  onClick={() => removeFromCart(p.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 me-6 rounded"
                >
                  Remove
                </button>
                <button
                  onClick={() => buyFromCart(p.id, p.name, p.quantity, p.price)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Book ${p.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withDashboard(Cart);
