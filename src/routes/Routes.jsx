import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../pages/secret/Secret";
import PrivateRoute from "../pages/privateRoute/PrivateRoute";
import DashBoard from "../layout/DashBoard";
import MyCart from "../pages/dashBoard/myCart/MyCart";
import AllUsers from "../pages/dashBoard/allUsers/AllUsers";
import AddItem from "../pages/dashBoard/addItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/dashBoard/manageItems/ManageItems";
import Payment from "../pages/dashBoard/payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "add-item",
        element: (
          <AdminRoutes>
            <AddItem />
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems",
        element: <ManageItems />,
      },
    ],
  },
]);

export default router;
