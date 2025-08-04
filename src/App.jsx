import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/EmployeeForm";
import Login from "./pages/Login";
import DepartmentPage from "./pages/DepartmentPage";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Dashboard />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/login" element={<Login />} /> */}

        <Route path="/jenkinserp/" element={<Dashboard />} />
        <Route path="/jenkinserp/employee-form" element={<EmployeeForm />} />
        <Route path="/jenkinserp/departments" element={<DepartmentPage />} />
        <Route path="/jenkinserp/login" element={<Login />} />
      </Routes>
    </Router>
  );
};


export default App;