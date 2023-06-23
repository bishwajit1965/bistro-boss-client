import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
const MySwal = withReactContent(Swal);

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (food) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${food._id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              MySwal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  return (
    <div className="w-full py-10">
      <Helmet>
        <title>Bistro Boss || My cart</title>
      </Helmet>

      <div className="flex uppercase justify-between my-2">
        <h3 className="font-bold">Total Items: {cart.length}</h3>
        <h3 className="font-bold">Total Price: {total}</h3>
        <Link to="/dashboard/payment">
          <button type="submit" className="btn btn-warning btn-sm">
            PAY
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full table-compact font-normal">
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Food</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-normal">
            {cart.map((food, index) => (
              <tr key={food._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={food.image}
                          className="w-6-h-6"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{food.name}</td>
                <td className="text-end">${food.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(food)}
                    className="btn btn-ghost btn-xs bg-red-500 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
