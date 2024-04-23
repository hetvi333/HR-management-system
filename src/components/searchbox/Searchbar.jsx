import React, { useState } from "react";
import EmployeeData from "../../EmployeeData.json";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Searchbar = () => {
  const { id } = useParams();
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
        className="border w-full outline-none border-slate-300 hover:border-indigo-600 focus:ring-2 focus:ring-indigo-300 py-2 px-7 rounded-full placeholder:ps-2"
      />
      {showSuggestions && (
        <div className="absolute w-full left-0 max-h-56 rounded-xl p-2 overflow-y-scroll bg-white top-20 cursor-pointer">
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
