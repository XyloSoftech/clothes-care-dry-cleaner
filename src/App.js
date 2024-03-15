// App.js

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./Components/routes/Approutes";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
