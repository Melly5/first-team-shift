import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import Logo from "../../../assets/images/logo.png";

export const HeaderUnsigned = () => {
  const pathname = useLocation().pathname;
  const assignStyle = (path) => pathname === path ? "but-unclicked" : "but-clicked";
  return (
    <Box className="header">
      <Box className="header-logo">
        <img src={Logo} alt="logo"></img>
      </Box>
      <Box className="header-sign">
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
      </Box>
    </Box>
  );
};
