import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  const active =
    "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent";
  const regular = `bg-gradient-to-r from-indigo-400 to-purple-600 text-[#474747] bg-clip-text font-semibold text-gray-600 hover:text-transparent hover:duration-500 hover:from-indigo-400 hover:to-purple-600 hover:bg-clip-text hover:bg-gradient-to-r`;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${active} font-semibold` : regular
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
