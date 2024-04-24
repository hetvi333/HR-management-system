import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Analysis = () => {
  const { toggle } = useContext(ThemeContext);
  const data = [
    { percentage: 50, label: "Accounting" },
    { percentage: 70, label: "Marketing" },
    { percentage: 80, label: "Management" },
    { percentage: 90, label: "Engineering" },
  ];

  return (
    <div
      className={`flex flex-col  rounded-xl shadow-lg border px-6 py-0 ${
        toggle
          ? "bg-[#161a1f] border-[#2a2e34] text-white"
          : "border-gray-300 shadow-indigo-400/30 bg-white"
      }`}
    >
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="p-5 w-24 h-24">
            <CircularProgressbar
              value={item.percentage}
              text={`${item.percentage}%`}
              styles={buildStyles({
                textSize: "25px",
                pathColor:
                  index === 0
                    ? "#6366f1"
                    : index === 1
                    ? "#4f46e5"
                    : index === 2
                    ? "#4338ca"
                    : "#3730a3",
                textColor: `${toggle ? "text-white" : "text-black bg-white"}`,
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
