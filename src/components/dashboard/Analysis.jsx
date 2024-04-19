import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Analysis = () => {
  const data = [
    { percentage: 50, label: "Accounting" },
    { percentage: 70, label: "Marketing" },
    { percentage: 80, label: "Management" },
    { percentage: 90, label: "Engineering" },
  ];

  return (
    <div className="flex flex-col  rounded-xl shadow-lg border border-gray-300 shadow-indigo-400/30 bg-white px-6 py-0">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="p-5 w-24 h-24">
            <CircularProgressbar
              value={item.percentage}
              text={`${item.percentage}%`}
              styles={buildStyles({
                textSize: "25px",
                pathColor:
                  index === 0 ? "#6366f1" : index === 1 ? "#4f46e5" : index === 2 ? "#4338ca" : "#3730a3",
                textColor: "black",
                trailColor: "#bfbdbd",
                backgroundColor: "#000",
              })}
            />
          </div>
          <span className="text-xl">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Analysis;
