import React from "react";
import Container from "./Container";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-[#F9F9FF] px-3 md:px-0">
      <Container>
        <div className="grid min-h-[70vh] grid-cols-1 items-center overflow-hidden md:h-screen md:grid-cols-9">
          <div className="col-span-4">
            <h1 className="text-center text-3xl font-bold leading-tight text-black md:w-[570px] md:text-left md:text-[80px]">
              One Step Closer To Your
              <span className=" inline-block bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                Dream Job
              </span>
            </h1>
            <p className="text-center text-secondery md:w-[460px] md:text-left">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="flex justify-center md:mt-8 md:justify-start">
              <Button to={"/applied-jobs"} text={"Get Started"} />
            </div>
          </div>
          <div className="col-span-5 hidden h-full items-end md:flex">
            <img
              className="object-scale-down"
              src="assets/images/hero.png"
              alt="hero"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
