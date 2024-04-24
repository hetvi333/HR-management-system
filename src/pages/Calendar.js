import React, { useContext } from "react";
import MyCalendar from "../components/calendar/MyCalendar";
import { ThemeContext } from "../contexts/ThemeContext";

const Calendar = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <>
      <section>
        <div className=" flex flex-col justify-center items-center py-6">
          <h1 className={`font-bold text-2xl ${toggle ? "text-white" : ""}`}>CALENDAR</h1>
          <p className=" font-semibold text-yellow-500">
            Welcome to your Calendar
          </p>
        </div>
      </section>

      <section className={`m-8 rounded-lg p-5 shadow-lg ${toggle ? "bg-[#1e242c] border-[#2a2e34] text-white" : "bg-white"}`}>
        <MyCalendar />
      </section>
    </>
  );
};

export default Calendar;
