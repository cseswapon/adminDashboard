import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../../api/axios";

const Login = () => {
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

    function setCookie(name, value, days) {
      let expires = "";
      if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    instance
      .post("user/login", state)
      .then((res) => {
        if (res.data) {
          localStorage.setItem(
            "login",
            JSON.stringify({ userLogIn: true, token: res.data.access_token })
          );
          console.log(res.data.data.email);
          setCookie("user_login", res.data.data.email, 1);
          navigate("/");
        }
      })
      .catch((err) => err);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md  w-2/6">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handelSubmit}>
            <div className="mb-4">
              <label htmlFor="number" className="block mb-2 text-gray-800">
                Phone Number
              </label>
              <input
                autoComplete="off"
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
                autoComplete="off"
                onChange={(e) =>
                  dispatch({
                    type: "NAME",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="password"
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
              Sign In
            </button>
          </form>
          <p className="my-3">
            Create a new account{" "}
            <Link className="text-blue-600" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
