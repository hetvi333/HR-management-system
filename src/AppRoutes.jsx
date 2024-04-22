import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Perfomance from "./pages/Perfomance";
import Layout from "./components/layout/Layout";
import Employee from "./pages/Employee";
import EmpProfile from "./components/employees/EmpProfile";
import Chat from "./pages/Chat";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Employee/:id" element={<EmpProfile />} />
          <Route path="/Perfomance" element={<Perfomance />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
