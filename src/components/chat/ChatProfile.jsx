import React from "react";
import profile from "../../images/Image Placeholder7-mkt.png";
import { IoMdSearch } from "react-icons/io";
import ChatList from "./ChatList";

const ChatProfile = () => {
  return (
    <div className="bg-white rounded-lg max-h-[88vh] overflow-y-scroll">
      <div className="sticky top-0 z-10 bg-white p-5">
        <div className="flex flex-col items-center gap-2 pb-5 border-b">
          <div>
            <img
              src={profile}
              className="w-24 h-24 rounded-full drop-shadow-xl"
            />
          </div>
          <h1 className="font-bold">Asiya Javayant</h1>
        </div>

        <div className="relative py-7">
          <IoMdSearch className="w-5 h-5 text-gray-700 absolute my-auto left-2 inset-y-0" />
          <input
            type="search"
            placeholder="Search"
            className="border outline-none border-slate-300 w-full py-3 px-8 rounded-md hover:border-indigo-600 focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      </div>

      <div className="p-5">
        <ChatList />
      </div>
    </div>
  );
};

export default ChatProfile;
