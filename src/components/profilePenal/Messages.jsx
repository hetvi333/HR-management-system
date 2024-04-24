import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import profile from "../../images/Avatar6-ranking.png";

const Messages = () => {
  const { toggle } = useContext(ThemeContext);
  const settings = [
    {
      name: "Mccoy Brown",
      discription: "now",
      number: 6,
    },
    {
      name: "Hayley Mays",
      discription: "2min ago",
      number: 4,
    },
    {
      name: "Javier King",
      discription: "27min ago",
      number: 1,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {settings.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex justify-start items-center p-3 gap-4 border rounded-lg cursor-pointer ${toggle ? "hover:bg-[#1a1e23] border-[#2a2e34]" : "hover:bg-slate-50"}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <img src={profile} alt="" />
              </div>
              <div>
                <h1 className="text-base font-bold">{item.name}</h1>
                <p className="text-slate-400 text-base font-medium">
                  {item.discription}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-indigo-400 px-2 py-1 text-xs font-bold ring-1 ring-inset ring-gray-500/10">
              {item.number}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
