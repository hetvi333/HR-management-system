import classNames from "classnames";
import React from "react";

const EmpStatus = ({ availability }) => {
  // const status = "py-1 px-4 rounded-md text-[13px] font-bold";
  // availability === "active"
  //   ? "border border-green-500 text-green-800 bg-green-300"
  //   : availability === "unverified"
  //   ? "border border-yellow-500  text-yellow-600 bg-yellow-200"
  //   : availability === "inactive"
  //   ? "border border-red-500 text-red-800 bg-red-200"
  //   : "";

  const labelCLasses = classNames(
    "py-1 px-4 rounded-md text-[13px] font-bold",
    {
      "border border-green-500 text-green-800 bg-green-300":
        availability === "active",
    },
    {
      "border border-yellow-500  text-yellow-600 bg-yellow-200":
        availability === "unverified",
    },
    {
      "border border-red-500 text-red-800 bg-red-200":
        availability === "inactive",
    }
  );
  return <label className={labelCLasses}>{availability}</label>;
};

export default EmpStatus;
