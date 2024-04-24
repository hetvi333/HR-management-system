import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Settings from "../components/profilePenal/Settings";
import Notification from "../components/profilePenal/Notification";
import Messages from "../components/profilePenal/Messages";
import { IoMdArrowForward } from "react-icons/io";

const ProfilePenal = ({ penalOpen, togglePenal }) => {
  const { toggle } = useContext(ThemeContext);
  const handleClose = () => {
    togglePenal();
  };
  return (
    <>
      <div></div>
      <div
        className={`${penalOpen ? "right-0" : "-right-full"} ${
          toggle
            ? "bg-[#161a1f] border-[#2a2e34]"
            : "border-gray-300 shadow-indigo-400/30 bg-white"
        } w-full overflow-scroll fixed top-0 h-full shadow-2xl md:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-50 lg:px-[35px]}`}
      >
        <div
          className={`flex justify-between items-center mb-4 sticky top-0 z-20 p-6  ${
            toggle
              ? "bg-[#161a1f] border-[#2a2e34]"
              : "border-gray-300 shadow-indigo-400/30 bg-white"
          } `}
        >
          <div className={toggle ? "text-white" : "text-black"}>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg font-semibold">Welcome</h1>
              <p className="text-slate-400 text-base font-semibold">
                Melania Martin
              </p>
            </div>
          </div>
          <div onClick={handleClose} className="cursor-pointer w-8 h-8">
            <IoMdArrowForward className={` text-2xl ${toggle ? "text-white" : "text-black"}`} />
          </div>
        </div>

        <div className={`px-6 ${toggle ? "text-white" : "text-black"}`}>
          <Settings />

          <div className="p-3 mb-4 flex flex-col gap-1">
            <h1 className=" text-lg font-semibold">
              Notification
            </h1>
            <p className="text-slate-400 text-base font-semibold">
              You have 3 notifications
            </p>
          </div>
          <Notification />

          <div className="p-3 mb-4 flex flex-col gap-1">
            <h1 className=" text-lg font-semibold">Messages</h1>
            <p className="text-slate-400 text-base font-semibold">
              You have new messages
            </p>
          </div>
          <Messages />
        </div>
      </div>
    </>
  );
};

export default ProfilePenal;
