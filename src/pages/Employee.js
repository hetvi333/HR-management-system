import React, { useState } from "react";
import empData from "../EmployeeData.json";
import EmpDetails from "../components/employees/EmpDetails";
import EmpData from "../components/employees/EmpData";

// react-icons
import { GoPlus } from "react-icons/go";

const Employee = () => {
  const [open, setOpen] = useState(false);

  const addNew = () => {
    setOpen(!open);
  };

  return (
    <>
      <section>
        <section className=" absolute z-20">
          {open && (
            <EmpData
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            />
          )}
        </section>

        <div className=" flex justify-between flex-col-reverse sm:flex-row items-center p-8">
          <h1 className="font-bold text-xl sm:text-2xl text-center py-2">
            Employees Details
          </h1>
          <div className="flex  gap-5">
            <button
              onClick={addNew}
              className=" bg-indigo-400 text-white font-semibold p-2 hover:bg-indigo-600 hover:font-bold rounded-md flex justify-between items-center"
            >
              <GoPlus size={20} />
              Add New
            </button>
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
