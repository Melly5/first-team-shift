import React from "react";
import { Box } from "@mui/system";
import "./DialogItem.css";

export const DialogItem = () => {
  return (
    <Box className="message-box">
      <div className="message received first">
        Мне нужны отчёты за три последних месяца, насколько я помню, ты
        говорила, что сделаешь их сегодня
      </div>
      <div className="message sent second">Закончила несколько минут назад</div>
      <div className="message received third">Пришлешь сейчас?</div>
      <div className="message sent forth">Да, конечно, минуту</div>
    </Box>
  );
};
