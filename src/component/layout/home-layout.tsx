import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../header";
import HeroComponent from "../hero";
import CategoryLabels from "../menu-navigation";

const HomeLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent isTransparent />
      <HeroComponent />
      <CategoryLabels />
      <Outlet />
    </React.Fragment>
  );
};

export default HomeLayout;
