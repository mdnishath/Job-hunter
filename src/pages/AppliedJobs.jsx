import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Button from "../components/Button";
import { getFromDb } from "../utils/dbhelpers";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedList, setAppliedList] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const list = getFromDb();
    const appliedIds = list.map((job) => job._id);
    const filteredJobList = jobs
      .filter((job) => {
        if (!input) {
          return true;
        }
        console.log(input);
        return job.jobType.includes(input);
      })
      .filter((job) => appliedIds.includes(job.id));
    setAppliedList(filteredJobList);
    console.log(filteredJobList);
  }, [jobs, input]);
  //what to show
  let content = null;
  if (appliedList && appliedList.length > 0) {
    content = appliedList.map((job) => (
      <div
        key={job.id}
        className="flex rounded-lg border p-[30px] md:space-x-4"
      >
        <div className="flex h-[240px] w-[240px] items-center justify-center rounded-lg bg-[#F4F4F4] p-[48px]">
          <img className="w-full" src="./assets/logo/google.png" alt="google" />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="mb-2 mt-8 text-xl font-extrabold text-[#474747] md:text-2xl">
                {job.jobTitle}
              </h4>
              <h5 className="text-lg font-semibold text-[#757575]">
                {job.companyName}
              </h5>
              <div className="mt-4 justify-between space-x-5">
                {job.jobType.map((type, index) => (
                  <span
                    key={index}
                    className="border-border-purple-500 border-bg-gradient-to-r border-from-blue-500 border-to-purple-500 inline-block rounded-lg border border-purple-500 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text px-5 py-3 font-extrabold text-transparent"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-col space-y-2 md:flex-row md:items-center md:space-x-5 md:space-y-0">
                <div className="flex space-x-3">
                  <SlLocationPin className="text-2xl" />
                  <p className="text-xl font-semibold text-[#757575]">
                    {job.location}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <AiOutlineDollarCircle className="text-2xl" />
                  <p className="text-xl font-semibold text-[#757575]">
                    Salary : {job.salary}
                  </p>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="block justify-center md:mt-8 md:justify-start">
              <Button to={`/job/${job.id}`} text={"View Details"} />
            </div>
          </div>
        </div>
      </div>
    ));
  } else {
    content = (
      <p className="text-center text-xl font-extrabold">No Job Found</p>
    );
  }
  // console.log(input);
  return (
    <div>
      <div className="bg-[url('/assets/images/header.png')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="grid min-h-[50vh] grid-cols-1 items-center overflow-hidden ">
            <h1 className="text-center text-[32px] font-extrabold text-black">
              Applied Jobs
            </h1>
          </div>
        </Container>
      </div>
      <section className="py-[70ox] md:py-[130px]">
        <Container>
          <div className="mb-4 flex justify-end">
            <label
              htmlFor="countries"
              className="mb-2  hidden text-sm font-medium text-gray-900 dark:text-white"
            >
              select job type
            </label>
            <select
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="countries"
              className="block  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value={""} className="hidden">
                Filter By
              </option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
              <option value="Full Time">Full Time</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-6">{content}</div>
        </Container>
      </section>
    </div>
  );
};

export default AppliedJobs;
