import React, { useState } from "react";
import Navbar from "../../navigation/Navbar";
import Sidebar from "../../navigation/Sidebar";
import ProfilePenal from "../../navigation/ProfilePenal";

const Layout = (props) => {
  const [isPenalOpen, setIsPenalOpen] = useState(false);

  const togglePenal = () => {
    setIsPenalOpen(!isPenalOpen);
  };

 
  return (
    <>
      {<ProfilePenal penalOpen={isPenalOpen} togglePenal={togglePenal} />}
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar togglePenal={togglePenal} />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
