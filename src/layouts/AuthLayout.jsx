import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h2>auth page</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
