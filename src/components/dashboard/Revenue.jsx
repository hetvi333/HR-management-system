import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  BarElement,
  BarController,
} from "chart.js";

ChartJS.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Revenue = () => {
  const { toggle } = useContext(ThemeContext);
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Revenue",
        data: [43, 61, 35, 99, 65, 62],
        backgroundColor: "#6366f1",
        borderColor: "#6366f1",
        pointBorderColor: "transparent",
        borderRadius: 10,
      },
      {
        label: "profit",
        data: [30, 20, 58, 68, 98, 20],
        backgroundColor: "#a5b4fc",
        borderColor: "#a5b4fc",
        pointBorderColor: "transparent",
        borderRadius: 10,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => value,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <>
      <div
        className={`rounded-xl p-5 shadow-lg border ${
          toggle
            ? "bg-[#161a1f] border-[#2a2e34]"
            : "border-gray-300 shadow-indigo-400/30 bg-white h-full"
        } `}
      >
        <div className="flex justify-between items-center">
          <h1
            className={`text-2xl font-bold text-left pb-4 ${
              toggle ? "text-white" : "text-black"
            }`}
          >
            Revenue Overview
          </h1>
          <button className={`border p-3 rounded-lg text-lg font-semibold focus:ring-2 focus:ring-indigo-300 ${
              toggle ? "text-white" : "text-black"
            }`}>
            Last Week
          </button>
        </div>
        <div>
          <Bar data={data} options={options} width={500}></Bar>
        </div>
      </div>
    </>
  );
};

export default Revenue;
