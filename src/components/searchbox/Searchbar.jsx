import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import EmployeeData from "../../EmployeeData.json";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const { toggle } = useContext(ThemeContext);
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    setShowSuggestions(e.target.value !== "");
  };

  const onSuggestion = (name) => {
    setValue(name);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-1/4">
      <IoMdSearch className="w-4 h-4 text-gray-700 absolute my-auto left-2 inset-y-0" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className={`border w-full outline-none  hover:border-indigo-600 focus:ring focus:ring-indigo-300 py-2 px-7 rounded-full placeholder:ps-2 ${
          toggle ? "bg-transparent border-[#383e47]" : "border-slate-300"
        }`}
      />
      {showSuggestions && (
        <div className="absolute w-full left-0 max-h-56 rounded-xl p-2 overflow-y-scroll border border-gray-300 shadow-indigo-400/30 bg-white hover:border-indigo-600 top-16 cursor-pointer z-50">
          {EmployeeData?.filter((item) => {
            const search = value.toLowerCase();
            const name = item.name.toLowerCase();
            return search && name.includes(search) && name !== search;
          }).map((item, id) => (
            <Link to={`/Employee/${item.id}`}>
              <div key={id} onClick={() => onSuggestion(item.name)}>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
