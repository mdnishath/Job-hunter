import React from "react";
import Container from "./Container";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] px-3 py-[70px] md:px-0 md:py-[130px]">
      <Container>
        <div className="grid grid-cols-12 text-white">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-3xl font-extrabold text-white">CareerHub</h5>
            <p className="mt-4 w-full text-base font-normal md:w-[300px]">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="mt-5 flex space-x-3">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white">
                <FaFacebookF className="text-xl text-[#337FFF]" />
              </div>
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white">
                <FaTwitter className="text-xl text-[#33CCFF]" />
              </div>
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white">
                <FaInstagram className="text-xl text-purple-500" />
              </div>
            </div>
          </div>
          <div className="col-span-6 py-5 md:col-span-2">
            <h4 className="text-xl font-semibold">Company</h4>
            <ul className="mt-4 flex flex-col space-y-3">
              <li className="text-base font-normal">About Us</li>
              <li className="text-base font-normal">Work</li>
              <li className="text-base font-normal">Latest News</li>
              <li className="text-base font-normal">Careers</li>
            </ul>
          </div>
          <div className="col-span-6 py-5 md:col-span-2">
            <h4 className="text-xl font-semibold">Product</h4>
            <ul className="mt-4 flex flex-col space-y-3">
              <li className="text-base font-normal">Prototype</li>
              <li className="text-base font-normal">Plans & Pricing</li>
              <li className="text-base font-normal">Customers</li>
              <li className="text-base font-normal">Integrations</li>
            </ul>
          </div>
          <div className="col-span-6 py-5 md:col-span-2">
            <h4 className="text-xl font-semibold">Support</h4>
            <ul className="mt-4 flex flex-col space-y-3">
              <li className="text-base font-normal">Help Desk</li>
              <li className="text-base font-normal">Sales</li>
              <li className="text-base font-normal">Become a Partner</li>
              <li className="text-base font-normal">Developers</li>
            </ul>
          </div>
          <div className="col-span-6 py-5 md:col-span-2">
            <h4 className="text-xl font-semibold">Contact</h4>
            <ul className="mt-4 flex flex-col space-y-3">
              <li className="text-base font-normal">524 Broadway , NYC</li>
              <li className="text-base font-normal">+1777-978-5570</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 bg-gradient-to-r from-purple-200 to-indigo-300" />
        <div className="flex flex-col justify-between text-gray-400 md:flex-row">
          <p>@2023 CareerHub. All Rights Reserved</p>
          <p>Powered by CareerHub</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
