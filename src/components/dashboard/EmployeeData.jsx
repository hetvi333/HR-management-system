import React from "react";

const EmployeeData = () => {
  const data = [
    {
      title: "Employees on time",
      number: 35,
    },
    {
      title: "Late Arrivals Today",
      number: 3,
    },
    {
      title: "Employee On Leave Today",
      number: 5,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        {data.map((emp, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-between shadow-lg border border-gray-300 shadow-indigo-400/30 bg-white py-6 px-6 rounded-md"
          >
            <div className="border-s-2 border-indigo-400 py-4 px-3 text-[18px] flex  flex-col sm:flex-row md:flex-col sm:items-center justify-between md:items-start items-start">
              <h1 className="text-indigo-600 font-semibold">{emp.title}</h1>
              <p className="font-semibold text-3xl">{emp.number}</p>
            </div>
            <div className="p-2 flex md:justify-center items-end">
              <button className="border py-2 px-5 rounded-md font-semibold  focus:ring-2 focus:ring-indigo-300">
                View employees
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeData;
