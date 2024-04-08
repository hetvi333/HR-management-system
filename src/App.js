import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className={`${toggle ? "bg-purple-900" : "bg-purple-50"}`}>
      <AppRoutes />
    </div>
  );
}

export default App;
