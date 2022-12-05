import React from "react";
import {NavLink} from "react-router-dom"

function Header({}) {

  return (
      <div>
      <NavLink 
      to="./list"
      >
        List
      </NavLink>
      <NavLink 
      to="./form"
      exact
      >
        Form
      </NavLink>
      </div>
  );
}

export default Header;
