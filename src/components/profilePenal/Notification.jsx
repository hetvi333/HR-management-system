import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Notification = () => {
  const settings = [
    {
      Icon: FiMessageSquare,
      name: "Your post has new comments",
      discription: "5 min",
    },
    {
      Icon: RiDeleteBinLine,
      name: "Your post has been deleted",
      discription: "15min ago",
    },
    {
      Icon: FaRegFolder,
      name: "Post has been updated",
      discription: "3h ago",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4">
        {settings.map((item, index) => {
          const Icon = item.Icon;
          return (
            <div
              key={index}
              className="flex justify-start items-center p-3 gap-4 border rounded-lg"
            >
              <Icon className="text-xl text-indigo-600" />
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

export default Notification;
