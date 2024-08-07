import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../images/logo.png";
import { FaChevronLeft, FaChevronRight, FaRegUser } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { ThemeContext } from "../contexts/ThemeContext";
import { LuCalendarCheck2 } from "react-icons/lu";
import { PiChatsCircleBold } from "react-icons/pi";
import {
  MdDarkMode,
  MdOutlineDashboard,
  MdOutlineLightMode,
} from "react-icons/md";

const Sidebar = () => {
  const { toggle, toggleFunction } = useContext(ThemeContext);

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
      Icon: LuCalendarCheck2,
    },
    {
      name: "Employees",
      link: "/Employee",
      Icon: FaRegUser,
    },
    {
      name: "Performance",
      link: "/Perfomance",
      Icon: SiSimpleanalytics,
    },
    {
      name: "Chat",
      link: "/Chat",
      Icon: PiChatsCircleBold,
    },
  ];

  return (
    <div className="h-screen sticky top-0 z-50">
      <nav
        className={`h-full flex flex-col ${
          toggle ? "bg-[#161a1f]" : "bg-white "
        }`}
      >
        <div className="p-4 pb-2 mb-2 flex justify-between items-center">
          <div
            className={`flex items-end gap-1 overflow-hidden transition-all ${
              isOpen ? "" : "w-0"
            }`}
          >
            <img src={profile} className="w-10 h-10" />
            <span className={`italic font-bold text-xl ${
                          toggle ? "text-indigo-300 " : "text-indigo-700 "
                        }`}>
              killForge
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-3 h-12 rounded-lg bg-gray-100 hover:bg-indigo-50 hover:text-indigo-800 ${
              toggle
                ? "bg-gray-500 text-white hover:bg-indigo-200"
                : "bg-slate-200 hover:bg-indigo-50"
            }`}
          >
            {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>
        <ul className="flex-1 flex-col px-3 gap-4">
          {sideMenu.map((menu, i) => {
            const Icon = menu.Icon;
            return (
              <li key={i}>
                <Link to={menu.link}>
                  <div
                    className={`relative flex items-center py-4 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 hover:text-indigo-800`}
                  >
                    <span>
                      <Icon
                        className={`${
                          toggle ? "text-indigo-300 " : "text-indigo-700 "
                        }text-xl`}
                      />
                    </span>
                    <span
                      className={`overflow-hidden transition-all ${
                        isOpen ? " w-40 ml-3" : "w-0"
                      } ${toggle ? "text-white" : "text-black"}`}
                    >
                      {menu.name}
                    </span>
                    {!isOpen && (
                      <div
                        className={`absolute z-50 left-full rounded-md px-2 py-1 ml-6 bg-indigo-300 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
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

        <div
          className={`relative flex items-center my-5 p-3 mx-auto  font-medium rounded-lg cursor-pointer transition-colors hover:text-indigo-800 group  ${
            toggle
              ? "bg-gray-500 text-white hover:bg-indigo-200"
              : "hover:bg-indigo-50  bg-slate-200"
          }`}
        >
          <div className="flex" onClick={toggleFunction}>
            <span>
              {toggle ? (
                <MdOutlineLightMode size={22} />
              ) : (
                <MdDarkMode size={22} />
              )}
            </span>
            <span
              className={`overflow-hidden transition-all ${
                isOpen ? " w-40 ml-3" : "w-0"
              } `}
            >
              {toggle ? "LightMode" : "DarkMode"}
            </span>
          </div>
          {!isOpen && (
            <div
              className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-300 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
            >
              {toggle ? "LightMode" : "DarkMode"}
            </div>
          )}
        </div>

        {/* <div className="flex gap-3 p-2">
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
        </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
