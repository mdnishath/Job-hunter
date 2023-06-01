import React from "react";

const Description = ({ children }) => {
  return (
    <p className="mx-auto my-4 text-center text-secondery md:w-[650px]">
      {children}
    </p>
  );
};

export default Description;
