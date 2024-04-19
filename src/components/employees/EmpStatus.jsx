import classNames from "classnames";
import React from "react";

const EmpStatus = ({ availability }) => {
  const labelCLasses = classNames(
    "py-1 px-4 rounded-md text-[12px] font-extrabold",
    {
      " text-green-800 bg-green-200 uppercase":
        availability === "active",
    },
    {
      "text-yellow-600 bg-yellow-200 uppercase":
        availability === "unverified",
    },
    {
      "text-red-800 bg-red-200 uppercase":
        availability === "inactive",
    }
  );
  return <label className={labelCLasses}>{availability}</label>;
};

export default EmpStatus;
