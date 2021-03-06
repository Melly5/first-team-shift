import React from "react";
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

  const onClickProfile = () => {
    navigate(`/profile`);
  }

  const onClickFriends = () => {
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
      <Box className="options">
        <Box className="options-item">
          <Box className="options-icon">
            <PeopleOutlineIcon sx={{ color: "#C5C5C5" }} />
          </Box>
          <Box className="option" onClick={onClickFriends}>Друзья</Box>
        </Box>
        <Box className="options-item">
          <Box className="options-icon">
            <SettingsOutlinedIcon sx={{ color: "#C5C5C5" }} />
          </Box>
          <Box className="option">Настройки</Box>
        </Box>
      </Box>
      <Box className="messages">
        <Box className="messages-logo">
          <KeyboardArrowDownOutlinedIcon sx={{ color: "#5A20FF" }} />
          <Box className="message-info">Сообщения</Box>
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
