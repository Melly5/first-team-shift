import React from 'react'
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Logo from "../../../assets/images/logo.png";

export const HeaderSigned = () => {
  return (
    <Box className="header signed">
    <Box className="signed-container">
      <Box className="header-logo signed">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <img src={Logo} alt="logo" />
        </Link>
      </Box>
      <Box className="header-info">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 218,
            height: 30,
            mr: 2,
          }}
          elevation={1}
          style={{
            padding: 8,
            backgroundColor: "#1B1A2C",
            border: "none",
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1, input: { color: "#858585" } }}
            placeholder="Поиск..."
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon sx={{ color: "#C5C5C5" }} />
          </IconButton>
        </Paper>
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <NotificationsNoneIcon sx={{ color: "#C5C5C5" }} />
        </IconButton>
      </Box>
    </Box>
  </Box>
  )
}
