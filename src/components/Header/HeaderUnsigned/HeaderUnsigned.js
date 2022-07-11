import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

export const HeaderUnsigned = () => {
  const pathname = useLocation().pathname;
  const assignStyle = (path) => pathname === path ? "but-unclicked" : "but-clicked";
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="header-sign">
        <Link
          className={assignStyle("/login")}
          to="/login"
          style={{ textDecoration: "none" }}
        >
          Sign In
        </Link>
        <Link
          className={assignStyle("/signup")}
          to="/signup"
          style={{ textDecoration: "none" }}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
