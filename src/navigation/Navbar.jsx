import React from "react";

// import logo
import profile from "../images/Avatar6-ranking.png";

// react icons
import { IoMdSearch } from "react-icons/io";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 shadow-xl h-16 py-3 px-10 items-center w-full bg-white justify-end">
      <div className="relative ">
        <input
          type="search"
          placeholder="Search"
          className="border-b-2 w-full bg-slate-100 border-purple-800 py-1 px-6 rounded-md"
        />
        <IoMdSearch className="w-5 h-5 text-gray-700 absolute top-2 right-2" />
      </div>
    </nav>
  );
};

export default Navbar;
