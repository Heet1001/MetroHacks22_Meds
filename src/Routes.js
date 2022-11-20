import React from "react";
import Addingmed from "pages/Addingmed";
import Dashboard from "pages/Dashboard";
import Loginpage from "pages/Loginpage";
import Calenderalt from "pages/Calenderalt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>

        
        <Route path="/" element={<Loginpage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/calendar" element={<Calenderalt />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addingmed" element={<Addingmed />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
