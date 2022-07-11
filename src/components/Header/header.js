import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderUnsigned } from "./HeaderUnsigned/HeaderUnsigned";
import { HeaderSigned } from "./HeaderSigned/HeaderSigned";
import "./Header.css";

const Header = (props) => {
  const pathname = useLocation().pathname;
  return (pathname === "/login") | (pathname === "/signup") ? <HeaderUnsigned/> : <HeaderSigned/>;
};

export default Header;
