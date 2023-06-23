import React from "react";

const MenuItemCard = ({ menuItem }) => {
  const { name, recipe, image, category, price } = menuItem;
  return (
    <div className="col-span-6 ">
      <div className="col-span-3 flex justify-between items-center space-x-4">
        <div className="">
          <img
            src={image}
            alt=""
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-22 h-16 my-2 rounded-md "
          />
        </div>
        <div className="">
          <p className="uppercase">{name} ------------- </p>
          <p>{recipe}</p>
        </div>
        <div className="text-yellow-500">${price}</div>
      </div>
    </div>
  );
};

export default MenuItemCard;
