import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navBar/NavBar";

const Main = () => {
  const location = useLocation();
  const excludeHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("sign-up");
  console.log(excludeHeaderFooter);

  return (
    <div>
      {excludeHeaderFooter || <NavBar />}
      <Outlet />
      {excludeHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
