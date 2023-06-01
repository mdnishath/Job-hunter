import React from "react";
import Hero from "../components/Hero";
import JobCaregoryList from "../components/JobCaregoryList";
import FeaturedJobs from "../components/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCaregoryList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
