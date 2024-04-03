import React from "react";
import LineChart from "../components/perfomance/LineChart";
import PieChart from "../components/perfomance/PieChart";
import PolarChart from "../components/perfomance/PolarChart";

const Perfomance = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-8">
      <div className="col-span-6">
        <LineChart />
      </div>
      <div className=" col-span-6 lg:col-span-3">
        <PolarChart />
      </div>
      <div className=" col-span-6 lg:col-span-3">
        <PieChart />
      </div>
    </div>
  );
};

export default Perfomance;
