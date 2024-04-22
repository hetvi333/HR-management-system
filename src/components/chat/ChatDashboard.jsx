import React from "react";
import profile from "../../images/Avatar6-ranking.png";
import { CiMenuKebab } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import Chats from "./Chats";
import { IoIosSend } from "react-icons/io";

const ChatDashboard = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center px-3 py-4 border-b sticky top-0 bg-white">
        <div className="flex items-center gap-5">
          <div>
            <img src={profile} alt="" />
          </div>
          <div>
            <h1 className="font-bold">Teams</h1>
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

      <div className="flex border-t px-3 py-5 justify-between gap-3">
        <input
          type="text"
          placeholder="Type a Message"
          className="p-3 border rounded-lg w-4/5 outline-none focus:ring-2 focus:ring-indigo-400"
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
