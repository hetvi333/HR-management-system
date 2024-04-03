import React, { useState } from "react";
import Toggle from "../components/employees/Toggle";
import EmpTable from "../components/employees/EmpTable";
import empData from "../EmployeeData.json";
import EmpDetails from "../components/employees/EmpDetails";
import EmpData from "../components/employees/EmpData";

// react-icons
import { GoPlus } from "react-icons/go";

const Employee = () => {
  const [userProfile, setUserProfile] = useState(true);
  const [open, setOpen] = useState(false);

  const addNew = () => {
    setOpen(!open);
  };

  const toggleBtn = () => {
    setUserProfile(!userProfile);
  };
  return (
    <>
      <section>
        <section className=" absolute z-20">{open && <EmpData open={open} onClose={()=>{setOpen(false)}}/>}</section>

        <div className=" flex justify-between items-center p-8">
          <h1 className="font-bold text-2xl">Employees</h1>
          <div className="flex  gap-5">
            <button
              onClick={addNew}
              className=" bg-indigo-400 text-white font-semibold p-2 hover:bg-indigo-600 hover:font-bold rounded-md flex justify-between items-center"
            >
              <GoPlus size={20} />
              Add New
            </button>
            <button onClick={toggleBtn}>
              <Toggle />
            </button>
          </div>
        </div>
      </section>

      <section className="px-8 pb-8">
        {userProfile ? (
          <EmpDetails data={empData} />
        ) : (
          <EmpTable data={empData} />
        )}
      </section>
    </>
  );
};

export default Employee;
