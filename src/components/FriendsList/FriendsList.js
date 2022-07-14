import React from "react";
import { Box, ListItem, List, ListItemText, Grid } from "@mui/material";
import "./FriendsList.css";

export const FriendsList = () => {
  const users = [
    {
      letters: "AЗ",
      name: "Андрей Зурко",
      isInNetwork: true,
    },
    {
      letters: "ЕВ",
      name: "Екатерина Владимирова",
      isInNetwork: true,
    },
    {
      letters: "AМ",
      name: "Андрей Михайлов",
      isInNetwork: false,
    },
    {
      letters: "AМ",
      name: "Марина Моор",
      isInNetwork: false,
    },
  ];

  return (
    <Box className="friendslist">
      <Box className="container friend-list">
        <div className="friends-header">Друзья</div>
        <div className="friends-items">
          {users.map(user => (
            <div className="friends_block">
              <div className="friends_round"></div>
              <div className="friends_descr">
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                {user.isInNetwork && <Box className="status-icon"></Box>}
                <span className="friends_name">{user.name}</span>
                </Box>
                <div class="friends_message">Написать сообщение</div>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};
