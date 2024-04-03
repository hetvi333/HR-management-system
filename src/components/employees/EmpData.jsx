import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const EmpData = ({ onClose, open }) => {
  return (
    <div
      className={`${
        open ? "right-0" : "right-0"
      }  bg-slate-200 rounded-2xl w-full md:w-[35vw] transition-all duration-300 z-20 px-4 top-0 right-0 fixed h-full `}
    >
      <div className="flex items-center justify-between py-4 border-b border-blue-300 ">
        <div className=" capitalize text-[25px] font-semibold">
          add new profile
        </div>
        <div className=" cursor-pointer w-8 h-8 flex justify-center items-center">
          <RxCross1 onClick={onClose} className="text-2xl" />
        </div>
      </div>

      <div className="p-3 flex flex-col justify-center items-center gap-5 ">
        <div className=" w-3/4">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            className=" rounded-md py-2 px-10  w-full placeholder:text-center"
            placeholder="Enter name"
          />
        </div>

        <div className="w-3/4">
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            className=" rounded-md py-2 px-10  w-full placeholder:text-center"
            placeholder="Enter name"
          />
        </div>

        <div className="w-3/4">
          <label htmlFor="">Contact No.</label>
          <input
            type="tel"
            className=" rounded-md py-2 px-10  w-full placeholder:text-center"
            placeholder="Enter name"
          />
        </div>

        <div className="w-3/4">
          <label htmlFor="">Designation</label>
          <input
            type="text"
            className=" rounded-md py-2 px-10  w-full placeholder:text-center"
            placeholder="Enter name"
          />
        </div>

        <div className="w-3/4">
          <label htmlFor="">Department</label>
          <input
            type="text"
            className=" rounded-md py-2 px-10  w-full placeholder:text-center"
            placeholder="Enter name"
          />
        </div>

        <div className="w-3/4">
          <label htmlFor="">Join Date</label>
          <input
            type="date"
            className=" rounded-md w-full py-2 px-10 placeholder:text-center"
            placeholder="Enter name"
          />
        </div>

        <div className="flex gap-6 w-3/4 py-2 ">
          <button
            onClick={onClose}
            className="bg-gray-600 w-full py-2 px-10 rounded-md"
          >
            Cancel
          </button>
          <button className="bg-green-600  w-full py-2 px-10 rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmpData;
