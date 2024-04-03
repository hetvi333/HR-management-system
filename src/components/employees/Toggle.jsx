import React, { useState } from "react";

// import icons
import { IoGridOutline } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

const Toggle = () => {
  const [gridIcon, setGridIcon] = useState(true);

  const toggleIcon = () => {
    setGridIcon(!gridIcon);
  };
  return (
    <div className="bg-slate-200 p-3 rounded-lg">
      <button onClick={toggleIcon}>
        {gridIcon ? <CiGrid2H /> : <IoGridOutline />}
      </button>
    </div>
  );
};

export default Toggle;
