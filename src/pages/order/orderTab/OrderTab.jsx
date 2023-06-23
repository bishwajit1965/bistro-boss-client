import React from "react";
import FoodCard from "../../../components/foodCard/FoodCard";

// TODO: pagination to be implemented here
const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-12 gap-4 justify-between my-10">
      {items.map((sItem) => (
        <FoodCard key={sItem._id} sItem={sItem} />
      ))}
    </div>
  );
};

export default OrderTab;
