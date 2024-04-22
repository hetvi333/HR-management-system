import React from "react";
import Settings from "../components/profilePenal/Settings";
import Notification from "../components/profilePenal/Notification";
import Messages from "../components/profilePenal/Messages";
import { IoMdArrowForward } from "react-icons/io";

const ProfilePenal = ({ penalOpen, togglePenal }) => {
  const handleClose = () => {
    togglePenal();
  };
  return (
    <>
      <div
        className={`${
          penalOpen ? "right-0" : "-right-full"
        } w-full overflow-scroll  bg-white fixed top-0 h-full shadow-2xl md:w-[30vw] xl:max-w-[30vw] transition-all duration-1000 z-50 px-6 lg:px-[35px]}`}
      >
        <div className="flex justify-between items-center mb-4 sticky top-0 z-20 bg-white">
          <div>
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-950 text-lg font-semibold">Welcome</h1>
              <p className="text-slate-400 text-base font-semibold">
                Melania Martin
              </p>
            </div>
          </div>
          <div onClick={handleClose} className=" cursor-pointer w-8 h-8">
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>

        <div className="z-0">
          <Settings />

          <div className="p-3 mb-4 flex flex-col gap-1">
            <h1 className="text-gray-950 text-lg font-semibold">
              Notification
            </h1>
            <p className="text-slate-400 text-base font-semibold">
              You have 3 notifications
            </p>
          </div>

          <Notification />

          <div className="p-3 mb-4 flex flex-col gap-1">
            <h1 className="text-gray-950 text-lg font-semibold">Messages</h1>
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
