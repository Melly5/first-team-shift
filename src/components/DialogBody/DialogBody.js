import React from "react";
import { Box } from "@mui/system";
import { DialogItem } from "./DialogItem/DialogItem";
import "./DialogBody.css";


export const DialogBody = () => {
  return (
    <Box className="dialogbox">
      <DialogItem />
    </Box>
  );
};
