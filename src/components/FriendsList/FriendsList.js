import React from "react";
import { Box } from "@mui/material";
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
        <span className="friends-header">Друзья</span>
        <Box className="friends-items">
          {users.map(user => (
            <Box className="friends_block">
              <Box className="friends_round"/>
              <Box className="friends_descr">
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                {user.isInNetwork && <Box className="status-icon"></Box>}
                <span className="friends_name">{user.name}</span>
                </Box>
                <span class="friends_message">Написать сообщение</span>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
