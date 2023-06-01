import React, { useState } from "react";
import Container from "./Container";
import ActiveLink from "./ActiveLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";
const navData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Statistics",
    path: "/statistics",
  },
  {
    name: "Applied Jobs",
    path: "/applied-jobs",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute mt-3 w-full px-3 md:mt-[50px] md:px-0">
      <Container>
        <div className="md:flex md:flex-row md:items-center md:justify-between">
          <Link to={"/"}>
            <p className="text-xl font-extrabold uppercase text-black md:text-3xl">
              Job Hunter
            </p>
          </Link>

          <div className="justify-center md:flex md:flex-1">
            <div className="absolute right-3 top-2 text-2xl text-indigo-600 md:hidden">
              {open ? (
                <AiOutlineClose
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineMenu
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer"
                />
              )}
            </div>
            <div
              className={`absolute left-0 ${
                open ? "top-[44px]" : "top-[-244px]"
              } z-[100] w-full items-center bg-white px-3 duration-300 md:static md:flex md:flex-1 md:justify-between md:bg-transparent md:px-0`}
            >
              <div className="justify-center md:flex md:flex-1">
                <ul className="md:flex md:space-x-[42px]">
                  {navData.map((item, index) => (
                    <li key={index} className="mt-3 md:mt-0">
                      <ActiveLink to={item.path}>{item.name}</ActiveLink>
                    </li>
                  ))}
                </ul>
              </div>
              <Button to={"/applied-jobs"} text={"Star Applying"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
