import React from "react";

// import image
import profile from "../../images/Avatar6-ranking.png";

const Employee = () => {
  const employee = [
    {
      branch: "Engineering",
      number: 12,
    },

    {
      branch: "accounting",
      number: 12,
    },

    {
      branch: "Marketing",
      number: 12,
    },

    {
      branch: "Managment",
      number: 12,
    },
    {
      branch: "Managment",
      number: 12,
    },
  ];
  return (
    <div className=" bg-white shadow-md rounded-md px-1 py-[13px]">
      <div className="flex flex-col items-center sm:flex-row justify-between px-3 py-[5px]">
        <h1 className="text-2xl my-2 font-semibold">Employees</h1>
        <div>
          <button className="bg-slate-100 py-1 px-5 rounded-md font-semibold hover:bg-indigo-200">
            View more
          </button>
        </div>
      </div>
      {/* <hr /> */}
      <div className="px-3 py-3">
        <div>
          {employee.map((emp, i) => (
            <div
              key={i}
              className=" bg-white py-2 px-4 mb-1 rounded-md flex flex-col md:flex-row md:justify-between md:items-center border border-gray-200"
            >
              <div>
                <h1 className="text-[16px]">{emp.branch}</h1>
                <p className="text-yellow-500 text-[16px] sm:text-[18px] font-semibold">
                  Team member: {emp.number}
                </p>
              </div>
              <div className="w-10 h-10">
                <img src={profile} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employee;
