import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FiUser } from "react-icons/fi";
import { IoPowerOutline, IoSettingsOutline } from "react-icons/io5";

const Settings = () => {
  const { toggle } = useContext(ThemeContext);
  const settings = [
    {
      Icon: FiUser,
      name: "profile",
      discription: "Lorem ipsum dolor sit amet.",
    },
    {
      Icon: IoSettingsOutline,
      name: "Settings",
      discription: "Lorem ipsum dolor sit amet.",
    },
    {
      Icon: IoPowerOutline,
      name: "Sign Out",
      discription: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4">
        {settings.map((item, index) => {
          const Icon = item.Icon;
          return (
            <div key={index} className={`flex justify-start items-center p-3 gap-4 border rounded-lg cursor-pointer ${toggle ? "hover:bg-[#1a1e23] border-[#2a2e34]" : "hover:bg-slate-50"}`}>
              <Icon className={`text-xl ${toggle ? "text-indigo-300 " : "text-indigo-700 "}`} />
              <div>
                <h1 className="text-base font-bold">{item.name}</h1>
                <p className="text-slate-400 text-base font-medium">
                  {item.discription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Settings;
