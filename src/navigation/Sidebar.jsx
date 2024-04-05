import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../images/Avatar6-ranking.png";

// react icons
import {
  MdDarkMode,
  MdOutlineDashboard,
  MdOutlineLightMode,
} from "react-icons/md";
import { FaCalendarCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideMenu = [
    {
      name: "Dashboard",
      link: "/",
      Icon: MdOutlineDashboard,
    },

    {
      name: "Calendar",
      link: "/Calendar",
      Icon: FaCalendarCheck,
    },
    {
      name: "Employees",
      link: "/Employee",
      Icon: FaUser,
    },
    {
      name: "Performance",
      link: "/Perfomance",
      Icon: SiSimpleanalytics,
    },
  ];

  const Mode = [
    {
      name: "LightMode",
      link: "",
      Icon: MdOutlineLightMode,
    },
    {
      name: "DarkMode",
      link: "",
      Icon: MdDarkMode,
    },
  ];

  return (
    <div className="h-screen sticky top-0">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 mb-2 flex justify-between items-center">
          <img
            src={profile}
            className={`overflow-hidden transition-all ${
              isOpen ? "w-10" : "w-0"
            }`}
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 h-10 rounded-lg bg-gray-100 hover:bg-gray-300"
          >
            {isOpen ? <FaChevronLeft />  : <FaChevronRight />}
          </button>
        </div>
        <ul className="flex-1 flex-col px-3 gap-4">
          {sideMenu.map((menu, i) => {
            const Icon = menu.Icon;
            return (
              <li key={i}>
                <Link to={menu.link}>
                  <div className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 hover:text-indigo-800">
                    <span>
                      <Icon/>
                    </span>
                    <span
                      className={`overflow-hidden transition-all ${
                        isOpen ? " w-40 ml-3" : "w-0"
                      }`}
                    >
                      {menu.name}
                    </span>
                    {!isOpen && (
                      <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-300 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                      >
                        {menu.name}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-col px-1 mx-2 border-t bg-slate-500 rounded-md">
          {Mode.map((menu, i) => {
            const Icon = menu.Icon;
            return (
              <li key={i}>
                <Link to={menu.link}>
                  <div className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 hover:text-indigo-800 bg-slate-200">
                    <span>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span
                      className={`overflow-hidden transition-all ${
                        isOpen ? " w-40 ml-3" : "w-0"
                      }`}
                    >
                      {menu.name}
                    </span>
                    {!isOpen && (
                      <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-300 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                      >
                        {menu.name}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-3 p-2">
          <img
            src={profile}
            alt=""
            className="w-10 h-10 rounded-md text-center"
          />
          <div className="flex justify-between items-center overflow-hidden">
            <div
              className={`overflow-hidden transition-all ${
                isOpen ? "w-30" : "w-0"
              }`}
            >
              <h4 className="font-semibold">xyz</h4>
              <span className="text-sm text-gray-300">xyz@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
