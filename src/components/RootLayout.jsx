import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";

const RootLayout = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Navigation />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default RootLayout;
