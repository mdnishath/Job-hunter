import React, { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import Container from "./Container";
import Title from "./Title";
import Description from "./Description";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
  const jobs = useLoaderData();
  const [limitesJobs, setLimitesJobs] = useState(jobs);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const limit = jobs.slice(0, 4);
    setLimitesJobs(limit);
  }, [jobs]);
  // handle show
  const handleShowAll = () => {
    setLimitesJobs(jobs);
    setShow(!show);
  };
  const lessJobs = () => {
    const limit = jobs.slice(0, 4);
    setLimitesJobs(limit);
    setShow(!show);
  };

  // what to show
  let content = null;
  if (limitesJobs && limitesJobs.length > 0) {
    content = limitesJobs.map((job) => <FeaturedCard key={job.id} job={job} />);
  }
  // console.log(limitesJobs, jobs);

  return (
    <div className="px-3 py-10 md:px-0 md:py-[130px]">
      <Container>
        <Title text={"Featured Jobs"} />
        <Description>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </Description>
        <div className="grid gap-6 md:grid-cols-2">{content}</div>
        <div className="mt-8 flex justify-center">
          {show ? (
            <button
              className="mt-3 inline-block rounded-lg bg-gradient-to-r from-indigo-400 to-purple-600 px-4 py-3 font-bold text-white md:mt-0 md:px-7 md:py-5 md:text-xl"
              text={"View Details"}
              onClick={lessJobs}
            >
              Less Jobs
            </button>
          ) : (
            <button
              className="mt-3 inline-block rounded-lg bg-gradient-to-r from-indigo-400 to-purple-600 px-4 py-3 font-bold text-white md:mt-0 md:px-7 md:py-5 md:text-xl"
              text={"View Details"}
              onClick={handleShowAll}
            >
              Show All
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedJobs;
