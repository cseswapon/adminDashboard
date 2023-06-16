/**
 * Title: Online E-commerce Product Sell
 * Description: Add Customer.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import { useReducer } from "react";
import withDashboard from "../../Components/DashBoardLayout/DashBoardLayout";
import { instance } from "../../api/axios";

const AddCustomer = () => {

  const initialState = {};
  const reducer = (state, action) => {
    switch (action.type) {
      case "NAME":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };
  // react hook useReducer use
  const [state, dispatch] = useReducer(reducer, initialState);
// submit the from 
  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    // api call
    instance
      .post("user/singup", state)
      .then((res) => {
        // console.log(res);
        if (res.data.data.contactNumber) {
          alert("Register Successful");
          dispatch({ type: "RESET" });
          window.location.reload();
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl text-ellipsis my-4">Add Customer</h1>
      {/* from section start */}
      <form
        onSubmit={handelSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-800">
            Full Name
          </label>
          <input
            name="personalName"
            onChange={(e) =>
              dispatch({
                type: "NAME",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) =>
              dispatch({
                type: "NAME",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block mb-2 text-gray-800">
            Phone Number
          </label>
          <input
            name="contactNumber"
            onChange={(e) =>
              dispatch({
                type: "NAME",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            maxLength={11}
            type="number"
            id="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-gray-800">
            Password
          </label>
          <input
            name="password"
            onChange={(e) =>
              dispatch({
                type: "NAME",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};
// this is a HoC Component
export default withDashboard(AddCustomer);
