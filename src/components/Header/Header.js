import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderUnsigned } from "./HeaderUnsigned/HeaderUnsigned";
import { HeaderSigned } from "./HeaderSigned/HeaderSigned";
import "./Header.css";

export const Header = () => {
  const {pathname} = useLocation();
  return (pathname === "/login") | (pathname === "/signup") ? <HeaderUnsigned/> : <HeaderSigned/>;
};

