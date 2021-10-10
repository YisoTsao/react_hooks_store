import React from "react";
import { useContext } from "react";
import { userContext } from "../store/LoginProvider";

const NavBar = () => {
  const state = userContext();
  return (
    <nav>
      <span>hooks</span>
      <span>{state.color}</span>
    </nav>
  );
};

export default NavBar;
