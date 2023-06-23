import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./FeaturedItem.css";

const FeaturedItem = () => {
  return (
    <div className="featured-item my-10 bg-fixed">
      <div className="py-10">
        <SectionTitle heading="Check it out" subHeading="Featured item" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center pb-20 bg-slate-500 opacity-60 p-20 px-16">
        <div className="">
          <img src={featuredImage} alt="" className="w-full h-60" />
        </div>
        <div className="text-white">
          <p>March 20, 2023</p>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline mt-4 border-0 border-b-4 text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
