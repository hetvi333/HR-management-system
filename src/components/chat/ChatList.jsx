import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import profile from "../../images/Avatar6-ranking.png";

const ChatList = () => {
  const { toggle } = useContext(ThemeContext);
  const settings = [
    {
      name: "Mccoy Brown",
      discription: "Lorem ipsum dolor sit",
      number: 6,
      time: "now",
    },
    {
      name: "Hayley Mays",
        discription: "Lorem ipsum dolor sit",
      number: 4,
      time: "2min ago",
    },
    {
      name: "Javier King",
        discription: "Lorem ipsum dolor sit",
      time: "15min ago",
    },
    {
      name: "Javier King",
        discription: "Lorem ipsum dolor sit",
      number: 1,
      time: "1h ago",
    },
    {
      name: "Javier King",
        discription: "Lorem ipsum dolor sit",
      number: 1,
      time: "3h ago",
    },
    {
      name: "Javier King",
        discription: "Lorem ipsum dolor sit",
      time: "yesterday",
    },
    {
      name: "Javier King",
        discription: "Lorem ipsum dolor sit",
      time: "yesterday",
    },
    {
      name: "Javier King",
        discription: "Lorem ipsum dolor sit",
      time: "yesterday",
    },
    {
      name: "Javier King",
        discription: "Lorem ipsum dolor sit",
      time: "yesterday",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {settings.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex justify-between items-center p-3 gap-4 border rounded-lg cursor-pointer  ${
              toggle
                ? "hover:bg-[#1a1e23] border-[#2a2e34]"
                : "hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <img src={profile} alt="" />
              </div>
              <div>
                <h1
                  className={`text-base font-bold ${
                    toggle ? "text-white" : "text-black"
                  }`}
                >
                  {item.name}
                </h1>
                <p className="text-slate-400 text-base font-medium line-clamp-1">
                  {item.discription}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <h5 className=" text-slate-400">{item.time}</h5>
              {item.number && (
                <span className="rounded-full bg-indigo-400 px-2 py-1 text-xs font-bold ring-1 ring-inset ring-gray-500/10">
                  {item.number}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
