import React from "react";
import { Box } from "@mui/system";
import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import { DialogBody } from "../../components/DialogBody/DialogBody";
import "./Chat.css";

export const ChatPage = () => {
  return (
    <Box className="mainbox signed">
      <Header />
      <Box className="chatbox">
        <SideBar/>
        <DialogBody/>
      </Box>
    </Box>
  );
}

