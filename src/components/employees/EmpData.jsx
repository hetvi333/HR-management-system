import React from "react";
import { FiCamera } from "react-icons/fi";

const EmpData = () => {
  return (
    <>
      <div className="px-8 py-3">
        <h1 className="text-indigo-600 text-center md:text-start text-lg font-bold underline cursor-pointer">
          Employee Information
        </h1>
        <div className="md:px-6">
          <div className="py-6 gap-4 md:gap-0 flex flex-col justify-center items-center md:flex-row md:justify-between md:items-end">
            <div className="flex items-center justify-center text-2xl bg-gray-50 rounded-2xl border border-slate-300 w-32 h-32 md:w-24 md:h-24">
              <FiCamera />
            </div>
            <div className="flex w-full md:w-3/12 gap-4">
              <button className="p-2 w-full bg-white border border-indigo-500 rounded-lg text-indigo-500 text-lg font-semibold cursor-pointer">
                Cancel
              </button>
              <button className="p-2 w-full bg-indigo-500 rounded-lg text-white text-lg font-semibold cursor-pointer">
                Add
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 md:gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="col-span-12 md:col-span-4 rounded-lg p-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="col-span-12 md:col-span-4 rounded-lg p-4"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="col-span-12 md:col-span-4 rounded-lg p-4"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="col-span-12 md:col-span-4 rounded-lg p-4"
            />
            <input
              type="text"
              placeholder="Gender"
              className="col-span-12 md:col-span-4 rounded-lg p-4"
            />
              <input
                type="text"
                placeholder="Department"
                className="col-span-12 md:col-span-4 rounded-lg p-4"
              />
            <input
              type="date"
              placeholder="Date of Birth"
              className="col-span-12 md:col-span-6 rounded-lg p-4"
            />
            <input
              type="date"
              placeholder="Date of Join"
              className="col-span-12 md:col-span-6 rounded-lg p-4"
            />
              <input
                type="text"
                placeholder="City"
                className="col-span-4 rounded-lg p-4"
              />
            <input
              type="text"
              placeholder="Address"
              className="col-span-8 rounded-lg p-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpData;
