import React from "react";
import profile from "../../images/Avatar6-ranking.png";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import EmpGragh from "./EmpGragh";
import empData from "../../EmployeeData.json";
import EmpStatus from "./EmpStatus";
import { Link, useParams } from "react-router-dom";


const EmpProfile = (props) => {
  const { id } = useParams();

  // find the employee id
  const employee = empData.find((user) => {
    return user.id === parseInt(id);
  });

  // if the empProfile is not found
  if (!employee) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  return (
    <div className=" px-16 py-8">
      {/* button */}
      <div className="flex justify-between">
        <Link to={"/Employee"}>
          <button className=" capitalize bg-yellow-500 py-1 px-4 text-[13px]  rounded-md font-bold text-white">
            go back
          </button>
        </Link>
        <div>
          <EmpStatus availability={employee.availability} />
        </div>
      </div>

      {/* profile */}
      <div className="flex flex-col items-center mb-4">
        <img src={profile} alt="" className=" w-36 h-36" />
        <h1 className="text-2xl font-semibold">{employee.name}</h1>
        <p className="text-md font-semibold text-slate-400">
          {employee.designation}
        </p>
      </div>

      {/* details */}
      <div className=" px-56">
        <div className="bg-blue-200 p-4 rounded-md">
          <div className="flex justify-between">
            <div>
              <h3 className=" font-semibold  text-[20px]">
                <span className=" text-slate-400 block text-[15px]">
                  Department
                </span>
                {employee.department}
              </h3>
            </div>
            <div>
              <h3 className=" font-semibold  text-[20px]">
                <span className=" text-slate-400 block text-[15px]">
                  Date Hired
                </span>
                {employee.Date_Hired}
              </h3>
            </div>
          </div>
          <hr />
          <div className="flex flex-col py-2 text-[14px] font-semibold gap-y-4">
            <label
              htmlFor=""
              className="flex gap-x-3 items-center text-[16px] font-semibold"
            >
              <FaRegEnvelope className="text-yellow-400 h-5 w-5" />
              {employee.email}
            </label>
            <label
              htmlFor=""
              className="flex gap-x-3 items-center text-[16px] font-semibold"
            >
              <FaPhoneAlt className="text-yellow-400 h-5 w-5" />
              {employee.phone}
            </label>
          </div>
        </div>
      </div>

      <EmpGragh />
    </div>
  );
};

export default EmpProfile;
