import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { IoMdSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import profile from "../images/Avatar6-ranking.png";
import Searchbar from "../components/searchbox/Searchbar";


const Navbar = ({ togglePenal }) => {
  

  const { toggle } = useContext(ThemeContext);
  return (
    <nav
      className={`flex h-20 p-6  items-center w-full ${
        toggle ? "bg-gray-900" : "bg-indigo-100"
      }`}
    >

      <Searchbar/>
   

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
