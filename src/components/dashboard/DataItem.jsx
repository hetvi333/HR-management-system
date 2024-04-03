import React from "react";

const DataItem = ({ title, number, className }) => {
  return (
    <div
      className={` bg-white shadow-md rounded-lg flex flex-col justify-center items-center py-10 ${className}`}
    >
      <h1 className="text-yellow-500 text-[18px] font-semibold">{title}</h1>
      <p className="font-semibold text-xl">{number}</p>
    </div>
  );
};

export default DataItem;
