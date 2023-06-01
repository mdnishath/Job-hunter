import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Button from "./Button";

const FeaturedCard = ({ job }) => {
  const { logo, companyName, jobTitle, id, jobType, location, salary } = job;
  return (
    <div className="rounded-lg border border-solid border-gray-300 p-[20px] md:p-[40px]">
      <img className="w-[120px]" src={logo} alt={companyName} />
      <h4 className="mb-2 mt-8 text-xl font-extrabold text-[#474747] md:text-2xl">
        {jobTitle}
      </h4>
      <h5 className="text-lg font-semibold text-[#757575]">{companyName}</h5>
      <div className="mt-4 justify-between space-x-5">
        {jobType &&
          jobType.map((type, index) => (
            <span
              key={index}
              className="border-border-purple-500 border-bg-gradient-to-r border-from-blue-500 border-to-purple-500 inline-block rounded-lg border border-purple-500 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text px-5 py-3 font-extrabold text-transparent"
            >
              {type}
            </span>
          ))}
      </div>
      <div className="mt-5 flex flex-col space-y-2 md:flex-row md:items-center md:space-x-5">
        <div className="flex space-x-3">
          <SlLocationPin className="text-2xl" />
          <p className="text-xl font-semibold text-[#757575]">{location}</p>
        </div>
        <div className="flex space-x-3">
          <AiOutlineDollarCircle className="text-2xl" />
          <p className="text-xl font-semibold text-[#757575]">
            Salary : {salary}
          </p>
        </div>
      </div>
      <div className="flex justify-center md:mt-8 md:justify-start">
        <Button to={`/job/${id}`} text={"View Details"} />
      </div>
    </div>
  );
};

export default FeaturedCard;
