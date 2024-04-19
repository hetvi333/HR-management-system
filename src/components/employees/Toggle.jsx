import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

const Toggle = () => {
  const [gridIcon, setGridIcon] = useState(true);

  const toggleIcon = () => {
    setGridIcon(!gridIcon);
  };
  return (
    <div className="bg-indigo-400 px-3 py-2 rounded-lg">
      <button onClick={toggleIcon}>
        {gridIcon ? <CiGrid2H /> : <IoGridOutline />}
      </button>
    </div>
  );
};

export default Toggle;
