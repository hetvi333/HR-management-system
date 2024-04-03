import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [10, 61, 35, 99, 150, 62, 105, 91, 148, 60, 37, 90, 72],
        backgroundColor: "transparent",
        borderColor: "#8b5cf6",
        pointBorderColor: "transparent",
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        min: 10,
        max: 250,
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
      <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
        <h1 className="text-2xl font-bold text-left">Perfomance</h1>

        <div>
          <Line data={data} options={options} width={500} height={200}></Line>
        </div>
      </div>
    </>
  );
};

export default LineChart;
