import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-10">
      <p className="text-yellow-500 text-center">
        <i> --- {subHeading} --- </i>
      </p>
      <h3 className="uppercase font-bold border-t-2 border-b-2 md:w-44 mx-auto my-2 p-2">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
