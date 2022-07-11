import React from "react";
import Messagebox from "./DialogItem/DialogItem";
import Sendbox from "./DialogPanel/DialogPanel";
import "./DialogBody.css";

const Dialog = () => {
  return (
    <div className="dialogbox">
      <Messagebox />
      <Sendbox />
    </div>
  );
};

export default Dialog;
