import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import DialogBody from "../../components/DialogBody/DialogBody";
import "./Chat.css";

export const ChatPage = () => {
  return (
    <div className="mainbox signed">
      <Header />
      <div className="chatbox">
        <SideBar/>
        <DialogBody/>
      </div>
    </div>
  );
}

