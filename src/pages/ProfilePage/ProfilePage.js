import React from 'react'
import { Box } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import { Profile } from '../../components/Profile/Profile';
import './ProfilePage.css';

export const ProfilePage = () => {
  return (
<Box className="mainbox signed">
      <Header />
      <Box className="chatbox">
        <SideBar/>
        <Profile/>
      </Box>
    </Box>
  )
}
