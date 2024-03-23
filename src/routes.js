import React from "react";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";
import Services from "./Components/Pages/Services";
import Faq from "./Components/Pages/Faq";
import Adminside from "./Components/Pages/Adminside";
import AdminLogin from "./Components/Pages/AdminLogin";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/services", element: <Services /> },
  { path: "/faq", element: <Faq /> },
  { path: "/admin", element: <Adminside /> },
  { path: "/Login", element: <AdminLogin /> },
 
  
];

export default routes;
