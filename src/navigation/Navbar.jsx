import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { IoMdSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import profile from "../images/Avatar6-ranking.png";

const Navbar = ({ togglePenal }) => {
  const { toggle } = useContext(ThemeContext);
  return (
    <nav
      className={`flex h-20 p-6  items-center w-full ${
        toggle ? "bg-gray-900" : "bg-indigo-100"
      }`}
    >
      <div className="relative w-1/4">
        <IoMdSearch className="w-4 h-4 text-gray-700 absolute my-auto left-2 inset-y-0" />
        <input
          type="search"
          placeholder="Search"
          className="border w-full border-slate-300 py-2 px-7 rounded-full placeholder:ps-2"
        />
      </div>

      <div className="flex flex-grow justify-end gap-12 items-center">
        <CiSettings className="w-6 h-6" />
        <div onClick={togglePenal} className="cursor-pointer">
          <img
            src={profile}
            alt=""
            className="w-9 h-9 rounded-md text-center"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
