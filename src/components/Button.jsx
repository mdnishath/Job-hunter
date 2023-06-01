import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="mt-3 inline-block rounded-lg bg-gradient-to-r from-indigo-400 to-purple-600 px-4 py-3 font-bold text-white md:mt-0 md:px-7 md:py-5 md:text-xl"
    >
      {text}
    </Link>
  );
};

export default Button;
