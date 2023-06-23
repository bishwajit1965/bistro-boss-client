import React from "react";
import MenuItemCard from "../../../shared/menuItem/MenuItemCard";
import Cover from "../../../shared/cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImage }) => {
  return (
    <div>
      {title && <Cover img={coverImage} title={title} />}

      <div className="grid md:grid-cols-12 gap-4 justify-between my-10">
        {items.map((menuItem) => (
          <MenuItemCard key={menuItem._id} menuItem={menuItem} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 my-5 bg-amber-100">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
