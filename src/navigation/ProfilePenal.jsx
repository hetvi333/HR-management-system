import React from "react";
import Settings from "../components/profilePenal/Settings";
import Notification from "../components/profilePenal/Notification";
import Messages from "../components/profilePenal/Messages";

const ProfilePenal = ({ penalOpen }) => {
  return (
    <>
      <div
        className={`${
          penalOpen ? "right-0" : "-right-full"
        } w-full overflow-scroll  bg-white fixed top-0 h-full shadow-2xl md:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 p-6 lg:px-[35px]}`}
      >
        <div className="p-3 mb-4 flex flex-col gap-2">
          <h1 className="text-gray-950 text-lg font-semibold">Welcome</h1>
          <p className="text-slate-400 text-base font-semibold">
            Isabella Andolini
          </p>
        </div>

        <Settings />

        <div className="p-3 mb-4 flex flex-col gap-2">
          <h1 className="text-gray-950 text-lg font-semibold">Notification</h1>
          <p className="text-slate-400 text-base font-semibold">
            You have 3 notifications
          </p>
        </div>

        <Notification />
        <Messages />
      </div>
    </>
  );
};

export default ProfilePenal;
