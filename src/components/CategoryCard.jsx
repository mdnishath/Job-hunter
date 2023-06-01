import React from "react";

const CategoryCard = ({ category }) => {
  const { logo, name, jobsAvailable } = category;
  return (
    <div className="rounded-lg bg-[#FAF8FF] p-[40px]">
      <div className="flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-[#EEEEFF]">
        <img className="w-[40px]" src={logo} alt={name} />
      </div>
      <h4 className="mb-2 mt-8 text-xl font-extrabold text-[#474747]">
        {name}
      </h4>
      <p className="font-semibold text-[#A3A3A3]">
        {jobsAvailable} Jobs Available
      </p>
    </div>
  );
};

export default CategoryCard;
