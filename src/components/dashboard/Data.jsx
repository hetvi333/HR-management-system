import React from "react";
import { Link } from "react-router-dom";
import DataItem from "./DataItem";

const Data = () => {
  return (
    <div className=" grid grid-cols-10 gap-5">
      <DataItem
        title="Newly Hire"
        number="35"
        className="col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2"
      />
      <DataItem
        title="Employees"
        number="100+"
        className="col-span-10 sm:col-span-5 md:col-span-4 lg:col-span-2"
      />
      <DataItem
        title="Vacancies"
        number="15"
        className="col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2"
      />
      <DataItem
        title="New Clients"
        number="2000"
        className="col-span-10 sm:col-span-5 md:col-span-5 lg:col-span-2"
      />
      <DataItem
        title="Monthly Expense"
        number="$ 2,00,000"
        className="col-span-10 md:col-span-5 lg:col-span-2"
      />
    </div>
  );
};

export default Data;
