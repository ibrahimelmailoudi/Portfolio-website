import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNavBar from "./components/SideNavBar";
import AppRoutes from "./routes/routes";

const App = () => {
  const location = useLocation();
  const [startView, setStartView] = useState(true);

  return (
    <>
      <Navbar />
      <AppRoutes />
      {startView ? "" : <SideNavBar />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
