import React from "react";
import profile from "../../images/Avatar6-ranking.png";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import EmpStatus from "./EmpStatus";

const EmpDetails = (props) => {
  const data = props.data;

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((user, i) => (
        <div key={i} className="p-4 rounded-lg shadow-lg border border-gray-300 shadow-indigo-400/30 bg-white">
          {/* checkbox and label */}
          <div className="flex justify-between pb-3">
            <input type="checkbox" />
            <EmpStatus availability={user.availability} />
          </div>

          {/* profile */}
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={profile} alt="" />
            </div>
            <div className="py-2 flex flex-col justify-center items-center">
              <h1 className="text-[20px] font-semibold">{user.name}</h1>
              <p className="text-[14px] text-slate-400 font-semibold">
                {user.designation}
              </p>
            </div>
          </div>

          {/* details */}
          <div className="pb-3 text-center text-[13px]">
            <Link to={`/Employee/${user.id}`}>
              <button className=" text-blue-500 border-b border-blue-500 hover:text-blue-900 hover:border-blue-800">
                Show Details
              </button>
            </Link>
          </div>

          {/* statements */}
          <div className="bg-indigo-50 rounded-lg">
            <div className="flex justify-between p-2">
              <div>
                <h3 className=" font-semibold text-[14px]">
                  <span className=" text-slate-400 block text-[12px]">
                    Department
                  </span>
                  {user.department}
                </h3>
              </div>
              <div>
                <h3 className=" font-semibold text-[14px]">
                  <span className=" text-slate-400 block text-[12px]">
                    Date Hired
                  </span>
                  {user.Date_Hired}
                </h3>
              </div>
            </div>
            <hr className="border-slate-300" />

            {/* email & contact */}
            <div className="flex flex-col p-2 text-[14px] font-semibold">
              <label htmlFor="" className="flex gap-x-3 items-center">
                <FaRegEnvelope className="text-yellow-400" />
                {user.email}
              </label>
              <label htmlFor="" className="flex gap-x-3 items-center">
                <FaPhoneAlt className="text-yellow-400" />
                {user.phone}
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmpDetails;
