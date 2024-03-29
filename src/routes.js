import React from "react";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";
import Services from "./Components/Pages/Services";
import Faq from "./Components/Pages/Faq";
import Adminside from "./Components/Pages/Adminside";
import AdminLogin from "./Components/Pages/AdminLogin";
import SubServiceCreationAndUpdation from "./Components/SubServiceCreationAndUpdation/SubServiceCreationAndUpdation";
import ServicesDetail from "./Components/Pages/ServiceDetailPage";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/services", element: <Services /> },
  { path: "/ServiceDetail/:id/:name", element: <ServicesDetail/> },
  { path: "/faq", element: <Faq /> },
  { path: "/admin", element: <Adminside /> },
  { path: "/subService/:id/:servname", element: <SubServiceCreationAndUpdation /> },
  { path: "/Login", element: <AdminLogin /> },
];

export default routes;
