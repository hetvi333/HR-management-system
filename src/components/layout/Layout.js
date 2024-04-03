import React from "react";
import Navbar from "../../navigation/Navbar";
import Sidebar from "../../navigation/Sidebar";

const Layout = (props) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
