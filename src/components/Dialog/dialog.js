import React from "react";
import "./dialog.css";
import Messagebox from "./MessageBox/messagebox";
import Sendbox from "./SendBox/sendbox";

const Dialog = () => {
  return (
    <div className="dialogbox">
      <Messagebox />
      <Sendbox />
    </div>
  );
};

export default Dialog;
