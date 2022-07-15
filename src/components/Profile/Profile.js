import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export const Profile = () => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/login`);
  }

  return (
    <Box className="userProfile">
      <Box className="container user-profile">
        <Box className="user-profile-status">
          <Box className="status-icon"/>
          <Box className="status-info">в сети</Box>
        </Box>
        <Box className="user-profile-info">
          <Box className="profile-icon"/>
          <Box className="profile-nickname profile">Александр Смирнов</Box>
        </Box>
        <Box className="profile-buttons">
          <Box className="profile-button edit">Редактировать</Box>
          <Box className="profile-button sign-out" onClick = { onClick }>Выйти</Box>
        </Box>
      </Box>
    </Box>
  );
};
