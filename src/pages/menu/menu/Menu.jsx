import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../home/popularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "./menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant || Menu</title>
      </Helmet>

      <Cover img={menuImage} title={"our menu"} />
      {/* Main cover */}

      <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"} />
      {/* Offered menu items */}

      <MenuCategory items={offered} />
      {/* Desserts items */}

      <MenuCategory
        coverImage={dessertImage}
        items={desserts}
        title="Dessert"
      />
      {/* Pizza */}

      <MenuCategory coverImage={pizzaImage} items={pizza} title={"Pizzas"} />

      {/* Salads */}
      <MenuCategory coverImage={saladImage} items={salad} title={"Salads"} />

      {/* Soups */}
      <MenuCategory coverImage={soupImage} items={soup} title={"Soups"} />

      <PopularMenu />
    </div>
  );
};

export default Menu;
