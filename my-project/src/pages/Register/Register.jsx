import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../../api/axios";

const Register = () => {
  const initialState = {};
  const reducer = (state, action) => {
    switch (action.type) {
      case "NAME":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    instance
      .post("user/singup", state)
      .then((res) => {
        if (res.data.data.contactNumber) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handelSubmit}>
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
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="my-3">
          Already Registered?{" "}
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
