import React from "react";
import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>This is home page</h1>
      <ul>
        <NavLink to="/cse">
          <div className="square">hi</div>
        </NavLink>
        <NavLink to="/mecha">
          <div className="square">hw</div>
        </NavLink>
      </ul>
      <Outlet />
    </>
  );
};

export default Home;
