import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Box } from "@mui/system";
import "./SideBar.css";

export const SideBar = () => {

  const navigate = useNavigate();

  const users = [
    {
      letters: 'AЗ',
      name: 'Андрей З.',
      isInNetwork: true
    },
    {
      letters: 'ЕВ',
      name: 'Екатерина В.',
      isInNetwork: true
    },
    {
      letters: 'AМ',
      name: 'Андрей М.',
      isInNetwork: false
    }
  ]

  const onClickFriends = () => {
    navigate(`/friends`);
  }

  const onClickProfile = () => {
    navigate(`/friends`);
  }

  return (
    <Box className="profilebox">
      <Box className="profilebox-container">
        <Box className="profile">
          <Box className="profile-photo"></Box>
          <Box className="profile-info">
            <Box className="profile-nickname" onClick ={ onClickProfile }>Александр</Box>
            <Box className="status">
              <Box className="status-icon"></Box>
              <Box className="status-info">в сети</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <div className="options">
        <div className="options-item">
          <div className="options-icon">
            <PeopleOutlineIcon sx={{ color: "#C5C5C5" }} />
          </div>
          <div className="option" onClick={onClickFriends}>Друзья</div>
        </div>
        <div className="options-item">
          <div className="options-icon">
            <SettingsOutlinedIcon sx={{ color: "#C5C5C5" }} />
          </div>
          <div className="option">Настройки</div>
        </div>
      </div>
      <Box className="messages">
        <Box className="messages-logo">
          <KeyboardArrowDownOutlinedIcon sx={{ color: "#5A20FF" }} />
          <span className="message-info">Сообщения</span>
        </Box>
        {users.map((user) => 
        <Box className="messages-item">
          <Box sx={{ padding: 0, margin: 0, position: 'relative',}}>
            <Box className="profile-photo list"/>
            { user.isInNetwork && <Box
              sx={{
                backgroundColor: '#4FB14F',
                border: '1px solid #F1F7FA',
                width: 7,
                height: 7,
                position: 'absolute',
                bottom: 2,
                right: 2,
                borderRadius: '4px'
              }}
            ></Box> }
          </Box>
          <Box className="profile-nickname list">{ user.name }</Box>
        </Box>
        )}
      </Box>
    </Box>
  );
};
