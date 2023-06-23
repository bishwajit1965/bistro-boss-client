import React from "react";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import PopularMenu from "../popularMenu/PopularMenu";
import Featured from "../featured/FeaturedItem";
import Testimonials from "../testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
