import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import profile from "../../images/Avatar6-ranking.png";
import { CiMenuKebab } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import Chats from "./Chats";
import { IoIosSend } from "react-icons/io";

const ChatDashboard = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <div
      className={` rounded-lg border h-screen p-4 ${
        toggle
          ? "bg-[#161a1f] border-[#2a2e34]"
          : "border-gray-300 shadow-indigo-400/30 bg-white"
      }`}
    >
      <div
        className={`flex justify-between items-center px-3 py-4 border-b sticky top-0 ${
          toggle
            ? "bg-[#161a1f] border-[#2a2e34]"
            : "border-gray-300 shadow-indigo-400/30 bg-white"
        }`}
      >
        <div className="flex items-center gap-5">
          <div>
            <img src={profile} alt="" />
          </div>
          <div>
            <h1 className={`font-bold ${toggle ? "text-white" : "text-black"}`}>
              Teams
            </h1>
            <p className="text-slate-400 ">Last active 1 hour ago</p>
          </div>
        </div>
        <div className="flex gap-5">
          <span className="rounded-full border border-slate-400 p-3  font-bold cursor-pointer hover:border-indigo-500">
            <SlPhone className="text-base text-slate-600 hover:text-indigo-600" />
          </span>
          <span className="rounded-full border border-slate-400 p-3 font-bold cursor-pointer hover:border-indigo-500 ">
            <CiMenuKebab className="text-base text-slate-600 hover:text-indigo-600" />
          </span>
        </div>
      </div>

      <div className="px-3 py-5  max-h-[55vh] overflow-y-scroll">
        <Chats />
      </div>

      <div className={`flex border-t px-3 py-5 justify-between gap-3 ${toggle? "border-[#2a2e34]" : ""}`}>
        <input
          type="text"
          placeholder="Type a Message"
          className={`p-3 border rounded-lg w-4/5 outline-none focus:ring-2 focus:ring-indigo-400 ${toggle ? "bg-[#111417] border-[#2a2e34]" : ""}`}
        />
        <button className="border p-3 focus:ring-2 rounded-lg bg-slate-100 text-xl">
          😊
        </button>
        <button className="border p-3 focus:ring-2 rounded-lg bg-indigo-400 font-bold capitalize flex items-center gap-2">
          <span>
            <IoIosSend />
          </span>
          send
        </button>
      </div>
    </div>
  );
};

export default ChatDashboard;
