import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import empData from "../EmployeeData.json";
import EmpDetails from "../components/employees/EmpDetails";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Employee = () => {
  const {toggle} = useContext(ThemeContext)
  return ( 
    <>
      <section>
        <section className=" absolute z-20"></section>

        <div className=" flex justify-between flex-col-reverse sm:flex-row items-center p-8">
          <h1 className={`font-bold text-xl sm:text-2xl text-center py-2 ${toggle? "text-white" : "text-black"}`}>
            Employees Details
          </h1>
          <div className="flex  gap-5">
            <Link to={"/Employee/Add-Employee"}>
              <button className=" bg-indigo-500 text-white text-sm font-semibold p-2 hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-500 rounded-md flex gap-2 justify-between items-center">
                <CiCirclePlus size={20} />
                Add New Employee
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="p-8">
        <EmpDetails data={empData} />
      </section>
    </>
  );
};

export default Employee;
