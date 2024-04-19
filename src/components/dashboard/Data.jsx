import React from "react";
import DataItem from "./DataItem";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

const Data = () => {
  return (
    <div className=" grid grid-cols-10 gap-5">
      <DataItem
        title="Newly Hire"
        number="35"
        growth="+12%"
        Icon= {IoArrowUpOutline}
        className="col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2"
      />
      <DataItem
        title="Employees"
        number="100+"
        growth="+30%"
        Icon= {IoArrowUpOutline}
        className="col-span-10 sm:col-span-5 md:col-span-4 lg:col-span-2"
      />
      <DataItem
        title="Vacancies"
        number="15"
        growth="-10%"
        Icon= {IoArrowDownOutline}
        className="col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2"
      />
      <DataItem
        title="New Clients"
        number="2000"
        growth="+23%"
        Icon= {IoArrowUpOutline}
        className="col-span-10 sm:col-span-5 md:col-span-5 lg:col-span-2"
      />
      <DataItem
        title="Monthly Expense"
        number="$ 2,00,000"
        growth="+43%"
        Icon= {IoArrowUpOutline}
        className="col-span-10 md:col-span-5 lg:col-span-2"
      />
    </div>
  );
};

export default Data;
