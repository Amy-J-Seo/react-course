import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import BluePage from "./BluePage";
import RedPage from "./RedPage";

function Layout() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}

export default Layout;
