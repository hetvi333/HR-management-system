import React, { useContext } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { toggle } = useContext(ThemeContext);
  return (
    <div className={`${toggle ? "bg-gray-900" : "bg-indigo-100"}`}>
      <AppRoutes />
    </div>
  );
}

export default App;
