/**
 * Title: Online E-commerce Product Sell
 * Description: All Route Control. private route, public route , admin route all handel this file.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import PrivateRoute from "../Private/Private";
import PublicRoute from "../Public/Public";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AllProduct from "../../pages/AllProduct/AllProduct";
import Cart from "../../pages/Cart/Cart";
import SingleProduct from "../../pages/SingleProduct/SingleProduct";
import AddProduct from "../../pages/AddProduct/AddProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddCustomer from "../../pages/AddCustomer/AddCustomer";
import CustomerList from "../../pages/CustomerList/CustomerList";
import OrderList from "../../pages/OrderList/OrderList";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/product",
    element: (
      <PrivateRoute>
        <AllProduct />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/product/:id",
    element: (
      <PrivateRoute>
        <SingleProduct />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/add_customer",
    element: (
      <AdminRoute>
        <AddCustomer />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/all_customer",
    element: (
      <AdminRoute>
        <CustomerList />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/add_product",
    element: (
      <AdminRoute>
        <AddProduct />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/cart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/order_list",
    element: (
      <AdminRoute>
        <OrderList />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
