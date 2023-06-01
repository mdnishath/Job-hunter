import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Container from "./Container";
import { AiOutlineDollar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { addToDb } from "../utils/dbhelpers";

const JobDetils = () => {
  const jobs = useLoaderData();
  // const [jobs, setJobs] = useState([]);
  const { id: jobId } = useParams();

  const foundedJob = jobs.find((job) => job.id === parseInt(jobId));
  const {
    companyName,
    id,
    contact,
    educationalRequirements,
    experiences,
    jobDescription,
    jobResponsibility,
    jobTitle,
    jobType,
    location,
    logo,
    salary,
  } = foundedJob || {};

  // console.log(foundedJob);

  //Handle apply
  const handleApply = () => {
    addToDb(id);
    console.log("applyed", id);
  };
  return (
    <div>
      <div className="bg-[url('/assets/images/header.png')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="grid min-h-[50vh] grid-cols-1 items-center overflow-hidden ">
            <h1 className="text-center text-[32px] font-extrabold text-black">
              {jobTitle}
            </h1>
          </div>
        </Container>
      </div>
      <section className="py-[70ox] md:py-[130px]">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            <div className=" md:col-span-8">
              <p>
                <span className="text-base font-extrabold text-black">
                  Job Description:{" "}
                </span>
                {jobDescription}
              </p>
              <p className="mt-[24px]">
                <span className="text-base font-extrabold text-black">
                  Job Responsibility:{" "}
                </span>
                {jobResponsibility}
              </p>
              <p className="mt-[24px]">
                <span className="block text-base font-extrabold text-black">
                  Educational Requirements:{" "}
                </span>
                {educationalRequirements}
              </p>
              <p className="mt-[24px]">
                <span className="block text-base font-extrabold text-black">
                  Experiences:{" "}
                </span>
                {experiences}
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-lg bg-opacity-10 bg-gradient-to-r from-purple-200 to-blue-200 p-[30px]">
                <h3 className="text-xl font-extrabold text-black">
                  Job Details
                </h3>
                <hr className="my-4" />
                <div className="flex items-center space-x-3">
                  <AiOutlineDollar className="text-xl" />
                  <p className="flex-1">
                    <span className="text-base font-extrabold text-black">
                      Salary :{" "}
                    </span>
                    {salary}
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                  <AiOutlineDollar className="text-xl" />
                  <p className="flex-1">
                    <span className="text-base font-extrabold text-black">
                      Job Title :{" "}
                    </span>
                    {jobTitle}
                  </p>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-black">
                  Contact Information
                </h3>
                <hr className="my-4" />
                <div className="flex items-center space-x-3">
                  <BsTelephone className="text-xl" />
                  <p className="flex-1">
                    <span className="text-base font-extrabold text-black">
                      Phone :{" "}
                    </span>
                    {contact.phone}
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                  <MdOutlineMailOutline className="text-xl" />
                  <p className="flex-1">
                    <span className="text-base font-extrabold text-black">
                      Email :{" "}
                    </span>
                    {contact.email}
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-3">
                  <FiMapPin className="text-xl" />
                  <p className="flex-1">
                    <span className="text-base font-extrabold text-black">
                      Address :{" "}
                    </span>
                    {location}
                  </p>
                </div>
              </div>
              <div className=" mt-[24px]">
                <button
                  className="mt-3 inline-block w-full rounded-lg bg-gradient-to-r from-indigo-400 to-purple-600 px-4 py-3 font-bold text-white md:mt-0 md:px-7 md:py-5 md:text-xl"
                  text={"View Details"}
                  onClick={handleApply}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default JobDetils;
