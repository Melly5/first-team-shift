import React from "react";
import { Box } from "@mui/system";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import InputBase from "@mui/material/InputBase";
import "./DialogPanel.css";

export const DialogPanel = () => {
  return (
    <Box className="send-box">
      <AttachFileOutlinedIcon sx={{ color: "#C5C5C5" }} />
      <div className="input-message">
        <InputBase
          sx={{ ml: 2, mt: 0.5, input: { color: "#C5C5C5" } }}
          placeholder="Введите сообщение..."
        />
      </div>
      <SendRoundedIcon sx={{ color: "#C5C5C5" }} />
    </Box>
  );
};

