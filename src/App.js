import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppRoutes from "./Components/routes/Approutes";
import Layout from "./Components/Layout";
import AdminLogin from "./Components/Pages/AdminLogin"; // Import your AdminLogin component
import Adminside from "./Components/Pages/Adminside";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Adminside />} />
        <Route path="/Login" element={<AdminLogin />} />
        <Route path="/*" element={<Layout><AppRoutes /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;