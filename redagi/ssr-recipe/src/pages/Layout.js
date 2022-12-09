import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

function Layout() {
  return (
    <div>
      <Menu />
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
