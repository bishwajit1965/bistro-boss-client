import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaCalendarWeek,
  FaCommentAlt,
  FaHome,
  FaMailBulk,
  FaShoppingBag,
  FaShoppingCart,
  FaUsersCog,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  // TODO: Load data from server to have dynamic isAdmin
  // const isAdmin = true;

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-amber-200 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/add-item">
                  <FaUtensils />
                  Add an Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaWallet /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsersCog />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome />
                  User Home
                </NavLink>
              </li>

              <li>
                <NavLink to="">
                  <FaCalendarAlt />
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <FaWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <FaCommentAlt />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <FaCalendarWeek />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}

          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider"></div>
          </div>
          <li>
            <NavLink to="">
              <FaHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="">
              <FaBars />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaMailBulk />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
