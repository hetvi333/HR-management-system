import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  Title,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(ArcElement, RadialLinearScale, Title, Tooltip, Legend);

const PolarChart = () => {
  const { toggle } = useContext(ThemeContext);
  const data = {
    labels: ["ReactJS", "JavaScript", "Python", "JAVA", "C++", "Kotlin"],
    datasets: [
      {
        data: [40, 61, 35, 70, 52, 63],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: "transparent",
        pointBorderColor: "transparent",
      },
    ],
  };

  return (
    <>
      <div className={` rounded-xl border shadow-lg p-8 mb-6 ${
          toggle
            ? "bg-[#161a1f] border-[#2a2e34]"
            : "border-gray-300 shadow-indigo-400/30 bg-white"
        }`}>
        <h1 className={`text-2xl font-bold text-left ${toggle ? "text-white" : ""}`}>Languages</h1>

        <div>
          <PolarArea data={data} width={60} height={60}></PolarArea>
        </div>
      </div>
    </>
  );
};

export default PolarChart;
