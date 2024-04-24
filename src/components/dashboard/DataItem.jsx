import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const DataItem = ({ title, number, growth, Icon, className }) => {
  const { toggle } = useContext(ThemeContext);
  const isUp = growth && growth.startsWith("+");
  return (
    <div
      className={`rounded-lg flex flex-col gap-2 justify-start px-4 py-10 shadow-lg border ${className} ${
        toggle
          ? "bg-[#161a1f] border-[#2a2e34]"
          : "border-gray-300 shadow-indigo-400/30 bg-white"
      }`}
    >
      <h1 className={`${toggle ? "text-white" : "text-gray-950"} text-xl font-bold`}>{title}</h1>
      <p className={`${toggle ? "text-white" : "text-black"} text-3xl font-bold`}>{number}</p>
      <p
        className={`flex items-center gap-1 text-green-500 font-semibold text-base ${
          isUp ? "text-green-500" : "text-pink-500"
        }`}
      >
        {growth}
        <span>{Icon && <Icon />}</span>
      </p>
    </div>
  );
};

export default DataItem;
