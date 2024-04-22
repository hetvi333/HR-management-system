import React from "react";
import Data from "../components/dashboard/Data";
import Employee from "../components/dashboard/Employee";
import EmployeeData from "../components/dashboard/EmployeeData";
import Revenue from "../components/dashboard/Revenue";
import Analysis from "../components/dashboard/Analysis";

const Dashboard = () => {
  return (
    <div>
      <section>
        <div className=" flex flex-col justify-start px-6 py-4 gap-2">
          <h1 className=" font-bold text-4xl">Welcome Melania</h1>
          <p className=" font-semibold text-lg text-slate-500">
            Your last login was on 04/02/2024 at 10:24 am
          </p>
        </div>
      </section>

      <section className="px-3 py-5">
        <section className="p-3">
          <div>
            <Data />
          </div>
        </section>
        <section className="p-3 gap-5 grid grid-cols-6">
          <div className="col-span-6 md:col-span-4">
            <Revenue />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Analysis />
          </div>
        </section>
        <section className="grid grid-cols-2 gap-6 p-3">
          <div className=" lg:col-span-1 col-span-2">
            <Employee />
          </div>
          <div className=" lg:col-span-1 col-span-2">
            <EmployeeData />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
