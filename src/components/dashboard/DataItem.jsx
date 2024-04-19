import React from "react";

const DataItem = ({ title, number, growth, Icon, className }) => {
  const isUp = growth && growth.startsWith("+");
  return (
    <div
      className={`rounded-lg flex flex-col gap-2 justify-start px-4 py-10 shadow-lg border border-gray-300 shadow-indigo-400/30 bg-white ${className}`}
    >
      <h1 className="text-gray-950 text-lg font-semibold">{title}</h1>
      <p className="text-black font-bold text-3xl">{number}</p>
      <p className={`flex items-center gap-1 text-green-500 font-medium text-base ${isUp ? "text-green-500" : "text-pink-500"}`}>
        {growth}
        <span>
          {Icon && <Icon />}
        </span>
      </p>
    </div>
  );
};

export default DataItem;
