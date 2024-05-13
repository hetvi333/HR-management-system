import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import profile from "../../images/Avatar6-ranking.png";
import { IoCheckmark } from "react-icons/io5";
import { MdCheck } from "react-icons/md";

const Chats = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <div>
      <div className="flex gap-4 py-4">
        <div className="w-9 h-9">
          <img src={profile} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className={`${toggle ? "text-white" : "text-black"}`}>Joelle Whitaker</h1>
          <p className="p-4 border rounded-lg bg-blue-100 border-blue-100 text-slate-600 w-4/5 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            inventore?
          </p>
          <span className="flex items-center gap-1">
            <p className={`${toggle ? "text-white" : "text-black"}`}>01:55</p>
            <MdCheck className="text-green-500 text-base" />
          </span>
        </div>
      </div>

      <div className="flex gap-4 py-4">
        <div className="w-9 h-9">
          <img src={profile} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className={`${toggle ? "text-white" : "text-black"}`}>Ioni Bowcher</h1>
          <p className="p-4 border rounded-lg bg-green-100 border-green-100 text-slate-600 w-4/5 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            inventore?
          </p>
          <span className="flex items-center gap-1">
            <p className={`${toggle ? "text-white" : "text-black"}`}>01:55</p>
            <MdCheck className="text-green-500 text-base" />
          </span>
        </div>
      </div>

      <div className="flex justify-end py-4">
        <div className="flex flex-col items-end gap-3">
          <p className="p-4 border rounded-lg text-purple-900 w-2/3 bg-indigo-100 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            inventore?
          </p>
          <span className="flex items-center gap-1">
            <p className={`${toggle ? "text-white" : "text-black"}`}>01:55</p>
            <MdCheck className="text-green-500 text-base" />
          </span>
        </div>
      </div>

      <div className="flex gap-4 py-4">
        <div className="w-9 h-9">
          <img src={profile} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className={`${toggle ? "text-white" : "text-black"}`}>Ayleen Boyd</h1>
          <p className="p-4 border rounded-lg bg-blue-100 border-blue-100 text-slate-600 w-4/5 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            inventore?
          </p>
          <span className="flex items-center gap-1">
            <p className={`${toggle ? "text-white" : "text-black"}`}>01:55</p>
            <MdCheck className="text-green-500 text-base" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
