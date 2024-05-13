import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import profile from "../../images/Image Placeholder7-mkt.png";
import { IoMdSearch } from "react-icons/io";
import ChatList from "./ChatList";

const ChatProfile = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <div
      className={`rounded-lg border h-screen overflow-y-scroll ${
        toggle
          ? "bg-[#161a1f] border-[#2a2e34]"
          : "border-gray-300 shadow-indigo-400/30 bg-white"
      }`}
    >
      <div
        className={`sticky top-0 z-10 p-5 ${
          toggle
            ? "bg-[#161a1f] border-[#2a2e34]"
            : "border-gray-300 shadow-indigo-400/30 bg-white"
        }`}
      >
        <div className={`flex flex-col items-center gap-2 pb-5 border-b ${toggle ? "text-white border-[#2a2e34]" : "text-black"}`}>
          <div>
            <img
              src={profile}
              className="w-24 h-24 rounded-full drop-shadow-xl"
            />
          </div>
          <h1 className={` text-bold `}>
            Asiya Javayant
          </h1>
        </div>

        <div className="relative py-7">
          <IoMdSearch className="w-5 h-5 text-gray-700 absolute my-auto left-2 inset-y-0" />
          <input
            type="search"
            placeholder="Search"
            className={`border outline-none  w-full py-3 px-8 rounded-md hover:border-indigo-600 focus:ring-1 focus:ring-indigo-300 ${
              toggle ? "bg-[#111417] border-[#2a2e34]" : "border-slate-300"
            }`}
          />
        </div>
      </div>

      <div className="px-5">
        <ChatList />
      </div>
    </div>
  );
};

export default ChatProfile;
