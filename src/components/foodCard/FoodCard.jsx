import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
const MySwal = withReactContent(Swal);

const FoodCard = ({ sItem }) => {
  const { _id, name, recipe, image, category, price } = sItem;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (sItem) => {
    console.log(sItem);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
        category,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch(); //Refetch to update the cart data length in the navBar
            MySwal.fire({
              position: "top-end",
              icon: "success",
              title: "Data has been added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      MySwal.fire({
        title: "Please login to order the food",
        text: "Please login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl col-span-3">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="absolute bg-slate-900 text-white py-1 px-2 rounded-md top-4 right-4">
          ${price}
        </p>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(sItem)}
            className="btn btn-outline border-0 border-b-4 border-orange-200 my-5 bg-gray-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
