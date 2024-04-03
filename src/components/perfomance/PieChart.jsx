import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, Title, ArcElement } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [10, 61, 35, 99, 10, 62],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: "transparent",
        pointBorderColor: "transparent",
        hoverOffset: 20,
      },
    ],
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <h1 className="text-2xl font-bold text-left">Perfomance</h1>

        <div>
          <Doughnut data={data} width={60} height={60}></Doughnut>
        </div>
      </div>
    </>
  );
};

export default PieChart;
