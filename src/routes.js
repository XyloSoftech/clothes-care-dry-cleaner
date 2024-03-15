import React from "react";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";
import PriceandServices from "./Components/Pages/PriceandServices";
import Faq from "./Components/Pages/Faq";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/price&services", element: <PriceandServices /> },
  { path: "/faq", element: <Faq /> },
];

export default routes;
