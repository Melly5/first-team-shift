import React from "react";
import { Box, ListItem, List, ListItemText, Grid } from "@mui/material";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import InputBase from "@mui/material/InputBase";
import "./DialogItem.css";

export const DialogItem = () => {
  const [message, setMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([]);
  const [value, setValue] = React.useState("");

  const onClick = () => {
    addMessage(message);
    setMessage("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
    setMessage(e.target.value);
  };

  const addMessage = (message) => {
    console.log("@@@", messageList);
    setValue("");
    setMessageList([...messageList, message]);
  };

  return (
    <Box sx={{height: '100%'}}>
      <Box className="message-box">
        <List>
          <ListItem key="1">
                <ListItemText className="message received"
                  align="left"
                  primary="Мне нужны отчёты за три последних месяца, насколько я помню, ты
                  говорила, что сделаешь их сегодня"
                ></ListItemText>
          </ListItem>
          <ListItem key="2">
                <ListItemText className="message received"
                  align="left"
                  primary="Пришлешь их сейчас?"
                ></ListItemText>
          </ListItem>
          { messageList.map(message => 
          <ListItem key="2" sx={{justifyContent: 'flex-end'}}>
              <ListItemText
                sx={{width: 'fit-content'}}
                className="message sent"
                align="right"
                primary={ message }
              ></ListItemText>
        </ListItem>
          )}
        </List>
      </Box>
      <Box className="send-box">
        <AttachFileOutlinedIcon sx={{ color: "#C5C5C5" }} />
        <Box className="input-message">
          <InputBase
            sx={{ ml: 2, mt: 0.5, input: { color: "#C5C5C5" } }}
            placeholder="Введите сообщение..."
            onChange={onChange}
            value={value}
          />
        </Box>
        <SendRoundedIcon sx={{ color: "#C5C5C5" }} onClick={onClick} />
      </Box>
    </Box>
  );
};
